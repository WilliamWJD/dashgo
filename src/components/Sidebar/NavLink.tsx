import { Icon, Link as ChackraLink, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link"
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps{
    icon: ElementType;
    children: string;
    href:string;
}

export function NavLink({ icon, children, href, ...rest }:NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChackraLink display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChackraLink>
        </ActiveLink>
    )
}