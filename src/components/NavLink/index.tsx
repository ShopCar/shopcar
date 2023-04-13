import { Link as ReactRouterLink } from "react-router-dom";

import { Link } from "@chakra-ui/react";

import { iLinkProps } from "../../types/navigation.types";

const NavLink = ({ children, variant, type, path }: iLinkProps) => {
	return (
		<>
			{type == "router" && (
				<Link as={ReactRouterLink} to={path} variant={variant}>
					{children}
				</Link>
			)}

			{type == "section" && (
				<Link href={`#${path}`} variant={variant}>
					{children}
				</Link>
			)}

			{type == "external" && (
				<Link href={path} variant={variant}>
					{children}
				</Link>
			)}
		</>
	);
};

export default NavLink;
