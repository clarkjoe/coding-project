# TODO: Create a multi-stage Docker build for your Go application

# Build stage
FROM golang:1.21-alpine AS builder

WORKDIR /app

# TODO: Copy go mod files and download dependencies
COPY go.mod go.sum ./
RUN go mod download

# TODO: Copy source code and build the application
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Production stage  
FROM alpine:latest

# TODO: Install ca-certificates for HTTPS requests (if needed)
RUN apk --no-cache add ca-certificates

WORKDIR /root/

# TODO: Copy the binary from builder stage
COPY --from=builder /app/main .

EXPOSE 8080
CMD ["./main"]