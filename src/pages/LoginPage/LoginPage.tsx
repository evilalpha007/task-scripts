import { useForm, zodResolver } from "@mantine/form";
import { TextInput, Button, Paper } from "@mantine/core";
import { loginSchema, LoginFormValues } from "../../features/auth/auth.schema";
import { useAuthStore } from "../../features/auth/auth.store";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    initialValues: { username: "", password: "" },
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = (values: LoginFormValues) => {
    login({ username: values.username });
    navigate("/launches");
  };

  return (
    <Paper p="xl" shadow="sm" withBorder maw={400} mx="auto" mt="xl">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Username"
          placeholder="Enter your username"
          {...form.getInputProps("username")}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...form.getInputProps("password")}
        />

        <Button fullWidth mt="md" type="submit">
          Login
        </Button>
      </form>
    </Paper>
  );
}
