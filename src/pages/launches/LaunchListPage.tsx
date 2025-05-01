import { Table, Loader, Title, Container, Badge } from "@mantine/core";
import { useLaunches } from "../../features/launches/useLaunches";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export default function LaunchListPage() {
  const { data, isLoading, error } = useLaunches();
const navigate = useNavigate();
  if (isLoading) return <Loader />;
  if (error) return <div>Error loading launches</div>;

  return (
    <Container>
      <Title order={2} mb="md">
        SpaceX Launches
      </Title>
      <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Success</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((launch) => (
            <tr
              key={launch.id}
              onClick={() => navigate(`/launches/${launch.id}`)}
            >
              <td>{launch.name}</td>
              <td>{dayjs(launch.date_utc).format("YYYY-MM-DD")}</td>
              <td>
                <Badge color={launch.success ? "green" : "red"}>
                  {launch.success ? "Success" : "Failed"}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
