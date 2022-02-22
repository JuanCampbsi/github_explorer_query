import { Badge, Box, Flex, Image, Link, Text } from "@chakra-ui/react";

import { useUsers } from "../services/users";
import { useRepos } from "../services/repos";

const USERNAME = "JuanCampbsi";

function Home() {
  const { data: user } = useUsers(USERNAME);
  const { data: repos } = useRepos(USERNAME);

  return (
    <Flex
      direction="column"
      alignItems="center"
      paddingTop="32px"
      paddingBottom="32px"
    >
      <Image
        src={user?.avatar_url}
        alt="Avatar"
        width="96px"
        height="96px"
        borderRadius="full"
      />
      <Text
        fontWeight="bold"
        fontSize={{ base: "24px", lg: "24px" }}
        marginTop="32px"
      >
        {" "}
        {user?.name}{" "}
      </Text>

      <Text
        textAlign="center"
        paddingLeft="16px"
        paddingRight="16px"
        alignItems="center"
        fontWeight="500"
        marginTop="8px"
      >
        {" "}
        {user?.bio}{" "}
      </Text>

      <Text
        fontWeight="bold"
        fontSize={{ base: "24px", sm: "23px", lg: "24px" }}
        marginTop="40px"
      >
        {" "}
        Repositórios{" "}
      </Text>

      {repos?.map((repo) => (
        <Link
          key={repo.id}
          display={{ base: "flex", smm: "block", sm: "flex", lg: "flex" }}
          alignItems="center"
          justifyContent="space-between"
          width={{
            base: "400px",
            smm: "250px",
            sm: "320px",
            md: "380px",
            lg: "400px",
          }}
          height="48px"
          backgroundColor="#0e0326"
          marginTop="16px"
          paddingLeft="16px"
          paddingRight="16px"
          href={repo.html_url}
          target="_blank"
          _focus={{ boxShadow: "none" }}
          _hover={{ textDecoration: "none" }}
        >
          <Text>{repo.name}</Text>
          <Badge colorScheme={"green"}>{repo.language}</Badge>
        </Link>
      ))}
    </Flex>
  );
}

export default Home;
