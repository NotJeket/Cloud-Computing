# Use a base image with curl installed
FROM alpine:latest

# Set the working directory
WORKDIR /task2

# Install curl
RUN apk --no-cache add curl

# Set the entrypoint script
COPY fetch_webpage.sh /app/fetch_webpage.sh
RUN chmod +x /app/fetch_webpage.sh

# Define the entrypoint
ENTRYPOINT ["./fetch_webpage.sh"]
