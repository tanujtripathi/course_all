FROM openjdk:8-jdk-alpine
EXPOSE 8080
ADD target/dockerapps.jar dockerapps.jar
ENTRYPOINT ["sh","-c","java -jar /dockerapps.jar"]

#ROM tomcat:8.0.51-jre8-alpine
#EXPOSE 8080
#RUN rm -rf /usr/local/tomcat/webapps/*
#COPY target/*.war /usr/local/tomcat/webapps/ROOT.war
#CMD ["catalina.sh", "run"]