import {
  Table,
  Loader,
  Title,
  Container,
  Badge,
  Text,
  Button,
} from "@mantine/core";
import { useLaunches } from "../../features/launches/useLaunches";
import dayjs from "dayjs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "../../features/auth/auth.store";

export default function LaunchListPage() {
  const { data, isLoading, error } = useLaunches();
    const logout = useAuthStore((state) => state.logout);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";
const navigate = useNavigate();
  if (isLoading) return <Loader />;
  if (error) return <div>Error loading launches</div>;


  const filterdData = data?.filter((launch) => {
    return launch.name.toLowerCase().includes(search);
  });

  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  return (
    <Container >
      <Button className="bg-red-500" mt="20px" onClick={handleLogout}>logout</Button>
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
          {filterdData?.length ? (
            filterdData.map((launch) => (
              <tr
                key={launch.id}
                onClick={() => navigate(`/launches/${launch.id}`)}
                style={{ cursor: "pointer" }}
              >
                <td>{launch.name}</td>
                <td>{dayjs(launch.date_utc).format("YYYY-MM-DD")}</td>
                <td>
                  <Badge color={launch.success ? "green" : "red"}>
                    {launch.success ? "Success" : "Failed"}
                  </Badge>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>
                <Text align="center">No launches found.</Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
