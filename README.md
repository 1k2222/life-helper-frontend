# Run Podman Image
podman run -itd --name life-helper-frontend -p 13784:5173 -e BACKEND_URL=http://192.168.31.127:8000 life-helper-frontend:0.0.1
