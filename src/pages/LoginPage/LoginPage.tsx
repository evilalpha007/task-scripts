import { useForm, zodResolver } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Button,
  Container,
  Group,
} from "@mantine/core";
import { loginSchema, LoginFormValues } from "../../features/auth/auth.schema";
import { useAuthStore } from "../../features/auth/auth.store";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: { username: "", password: "" },
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = (values: LoginFormValues) => {
    login({ username: values.username });
    navigate("/launches");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#1e3a8a] to-[#1e40af] flex items-center justify-center p-4">
      <Container size={420}>
        <Paper
          shadow="md"
          radius="md"
          p="xl"
          withBorder
          className="bg-white/90 backdrop-blur-md border border-gray-200"
        >
          <Title
            order={2}
            className="text-center font-semibold text-2xl text-[#1e3a8a] mb-6"
          >
            Welcome Back
          </Title>

          <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-4">
            <TextInput
              label="Username"
              placeholder="your@email.com"
              {...form.getInputProps("username")}
              required
              size="md"
              classNames={{
                label: "text-black",
              }}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              {...form.getInputProps("password")}
              required
              size="md"
            />

            <Group position="right">
              <Button
                type="submit"
                size="md"
                className="bg-[#1e3a8a] hover:bg-[#1e40af]"
              >
                Login
              </Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
