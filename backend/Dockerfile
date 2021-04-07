FROM openjdk:15.0.2-slim-buster
COPY target/*.jar /app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 3001
