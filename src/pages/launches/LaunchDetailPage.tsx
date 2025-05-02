import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  Text,
  Badge,
  Container,
  Loader,
  Button,
  Group,
} from "@mantine/core";
import axios from "axios";
import { useEffect } from "react";

export default function LaunchDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["launch", id],
    queryFn: async () => {
      if (!id) return null;
      const res = await axios.get(
        `https://api.spacexdata.com/v4/launches/${id}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (data?.name) {
      document.title = `${data.name} | Launch Detail`;
    }
  }, [data]);

 

  if (isLoading)
    return (
      <Container>
        <Loader size="xl" />
        <Text align="center" mt="md">
          Loading launch details...
        </Text>
      </Container>
    );

  if (error)
    return (
      <Container>
        <Text color="red" size="lg" align="center">
          Failed to load launch. Please check your internet or try again later.
        </Text>
        <Button
          onClick={() => navigate(`/launches?${searchParams.toString()}`)}
          mt="md"
        >
          Back to Launches
        </Button>
      </Container>
    );

  if (!data)
    return (
      <Container>
        <Text>Launch not found</Text>
        <Button
          onClick={() => navigate(`/launches?${searchParams.toString()}`)}
          mt="md"
        >
          Back to Launches
        </Button>
      </Container>
    );

  return (
    <Container size="md" py="md">
      <Button
        onClick={() => navigate(`/launches?${searchParams.toString()}`)}
        mb="lg"
        variant="subtle"
      >
        ← Back to Launches
      </Button>

      <Card shadow="md" padding="lg" withBorder>
        <Text size="xl" weight={700}>
          {data.name}
        </Text>

        <Group spacing="xs" mt="xs">
          <Text color="dimmed">
            {new Date(data.date_utc).toLocaleDateString()}
          </Text>
          <Badge color={data.success ? "green" : "red"}>
            {data.success ? "SUCCESS" : "FAILED"}
          </Badge>
        </Group>

        <Text mt="md">
          {data.details || "No details available for this launch."}
        </Text>

        {data.links?.webcast && (
          <Button
            component="a"
            href={data.links.webcast}
            target="_blank"
            rel="noopener noreferrer"
            mt="xl"
            fullWidth
          >
            Watch Launch Video
          </Button>
        )}
      </Card>
    </Container>
  );
}
