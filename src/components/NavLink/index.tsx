import { Link } from "@chakra-ui/react";
import { NavLink as ReactRouterLink } from "react-router-dom";

import { iLinkProps } from "../../types/compoments";

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
				<Link href={`http://${path}`} variant={variant} isExternal>
					{children}
				</Link>
			)}
		</>
	);
};

export default NavLink;
