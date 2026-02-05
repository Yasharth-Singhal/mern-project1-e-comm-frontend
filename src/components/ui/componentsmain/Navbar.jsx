import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi";
import { ColorModeButton } from "../color-mode";

const Navbar = () => {

	return (
		<Container maxW="1140px" px={4}>
			<Flex
				h={16}
				alignItems="center"
				justifyContent="space-between"
				flexDir={{ base: "column", sm: "row" }}
			>

				<Text
					color={"red"}
					fontSize={25}
				>
					<Link to="/">Product Store 🛒</Link>
				</Text>

				<HStack spacing={2}>

					<Link to="/create">
						<Button>
							<FiPlusSquare size={20} />
						</Button>
					</Link>

					<ColorModeButton />

				</HStack>

			</Flex>
		</Container>
	);
};

export default Navbar;
