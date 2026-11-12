FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml ./
COPY src ./src
RUN --mount=type=secret,id=maven-ca \
		keytool -importcert -noprompt -trustcacerts \
			-alias local-network-root-ca \
			-file /run/secrets/maven-ca \
			-keystore "$JAVA_HOME/lib/security/cacerts" \
			-storepass changeit \
		&& mvn -B -DskipTests package

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
