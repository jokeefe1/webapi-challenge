import React from 'react';
import { Box, Text } from 'gestalt';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="around"
            height={70}
            color="midnight"
            padding={1}
        >
            {/* Home Link */}
            <NavLink to="/" activeClassName="active">
                <Text size="xl" color="white">
                    Home
                </Text>
            </NavLink>

            {/* Projects link */}
            <NavLink to="/projects" activeClassName="active">
                <Text size="xl" color="white">
                    Projects
                </Text>
            </NavLink>

            {/* Actions Link */}
            <NavLink to="/actions" activeClassName="active">
                <Text size="xl" color="white">
                    Actions
                </Text>
            </NavLink>
        </Box>
    );
}
