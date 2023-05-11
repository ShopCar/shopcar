import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { Heading, VStack, Text, Avatar, IconButton, useEditableControls, ButtonGroup, Editable, EditablePreview, Input, EditableInput } from "@chakra-ui/react";
import AvatarTag from "../Avatar/AvatarTag";
import { iComment } from "../../types/comments";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Comment = ({
	userName,
	comment,
	time,
	color,
	commentData,
	setComments
}: {
	userName: string;
	comment: string;
	time: string;
	color: string;
	commentData: any;
	comments: iComment[] | null;
	setComments: React.Dispatch<React.SetStateAction<iComment[] | null>>;
}) => {
	const [newComment, setNewComment] = useState(comment)

	const newDate = (CommentDate: string) => {
		const date: any = Date.parse(CommentDate)
		const currentDate: any = new Date()

		const days = (currentDate - date) / (1000 * 60 * 60 * 24)
		const hours = days*24
		const minutes = hours*60

		const daysF = parseInt(days.toString())
		const hoursF = parseInt(hours.toString())
		const minutesF = parseInt(minutes.toString())

		return daysF === 0 ? (
				hoursF === 0 ? `${minutesF} minuto(s) atrás` : `${hoursF} hora(s) atrás`
			) : (
				`${daysF} dia(s) atrás`
			)
	}
	
	const timeFormated = newDate(commentData.createdAt)
	
	const EditableControls = () => {
		const {
		  isEditing,
		  getSubmitButtonProps,
		  getEditButtonProps,
		} = useEditableControls()
		return isEditing ? (
		  <ButtonGroup justifyContent='end' size='sm'>
			<IconButton
				aria-label="Salvar Edição"
				_hover={{ color: "brand.1" }}
				justifyContent='end'
				icon={<CheckIcon onClick={async () => {
					const {data} = await api.patch(`/comments/${commentData.id}`, {comment: newComment}, {
						headers: {
							Authorization: `Bearer ${localStorage.getItem("token@shopCar")}`
					}});
					setComments((old) => {
						let commentIndex = 0
						old!.forEach((item, index) => {if(item.id !== data.id){commentIndex += index;}});
						return old!.fill(data, commentIndex, commentIndex+1)
					})
				}}/>}
				{...getSubmitButtonProps()}
			/>
		  </ButtonGroup>
		) : (
		  <Flex justifyContent='end' display={localStorage.getItem("UUID@shopCar") == commentData.user.id? "block" : "none"}>
			<IconButton aria-label="Editar" _hover={{ color: "brand.1" }} size='sm' justifyContent='end' icon={<EditIcon boxSize="14px" />} {...getEditButtonProps()} />
		  </Flex>
		)
	}
	return (
		<>
			<VStack w="100%" alignItems="start" spacing="16px">
				<Flex w="100%" alignItems="center" justifyContent="space-between">
					<Flex w="100%">
						<AvatarTag name={userName} color={color} />

						<Text color="gray.2">{timeFormated}</Text>
					</Flex>
					<IconButton
						display={localStorage.getItem("UUID@shopCar") == commentData.user.id? "block" : "none"}
						aria-label="excluir"
						icon={<CloseIcon boxSize="12px" />}
						ml="8px"
						_hover={{ color: "brand.1" }}
						onClick={async () => {
							await api.delete(`/comments/${commentData.id}`, {
								headers: {
									Authorization: `Bearer ${localStorage.getItem("token@shopCar")}`
							}});
							setComments((old) => old && old.length > 1? old.filter((item) => item.id !== commentData.id) : null);
						}}
					/>
				</Flex>
				<Editable
					display="flex"
					w="full"
					justifyContent="space-between"
					defaultValue={newComment}
					fontSize='16px'
					isPreviewFocusable={false}
					cursor={localStorage.getItem("UUID@shopCar") == commentData.user.id? "pointer" : ""}
				>
					<EditablePreview />
					<Input as={EditableInput} onChange={(e) => setNewComment(e.target.value)}/>
					<EditableControls/>
				</Editable>
			</VStack>
		</>
	);
};

export default Comment;
