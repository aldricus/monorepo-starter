import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS if your frontend is on a different origin
  app.enableCors({
    origin: "http://localhost:xxxx", // Replace xxxx with your frontend port if needed
    // credentials: true, // Important for sessions/cookies
  });

  // Global Validation Pipe
  /*app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties not in DTO
      transform: true, // Automatically transform payloads to DTO instances
    }),
  );*/

  // Initialize Passport and Session support
  //app.use(passport.initialize());
  //  app.use(passport.session()); // Important: Call AFTER session middleware

  await app.listen(process.env["PORT"] ?? 3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
void bootstrap();
