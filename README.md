````markdown
# 📇 MERN Contact App with Prometheus + Grafana Monitoring

This project is a simple **MERN stack** (MongoDB, Express, React, Node.js) contact management app, containerized using **Docker Compose**, with integrated monitoring using **Prometheus** and **Grafana**.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Monitoring**: Prometheus + Grafana
- **Metrics Collection**: [`prom-client`](https://github.com/siimon/prom-client)
- **Containerization**: Docker & Docker Compose

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
````

### 2. Configure Environment Variables

Create a `.env` file inside the `/backend` directory:

```env
MONGO_URI=mongodb://mongo:27017/yourdbname
```

### 3. Run the Application

```bash
docker-compose up -d
```

---

## 🔗 Accessing the Services

* **Frontend**: [http://localhost:5173](http://localhost:5173)
* **Backend**: [http://localhost:5000](http://localhost:5000)
* **Prometheus**: [http://localhost:9090](http://localhost:9090)
* **Grafana**: [http://localhost:3000](http://localhost:3000)

---

## 📊 Monitoring

* **Prometheus** scrapes metrics from the `/metrics` endpoint exposed by `prom-client` in the backend.
* **Grafana** visualizes key metrics like:

  * Request durations
  * Request counts
  * HTTP status codes
  * Custom API metrics

### Default Grafana Login

* **Username**: `admin`
* **Password**: `admin`
  *(⚠️ Please change this after your first login)*

---

## 📁 Project Structure

```
project-root/
│
├── backend/            # Express backend with Prometheus metrics
├── frontend/           # React (Vite) frontend
├── prometheus.yml      # Prometheus configuration
├── docker-compose.yml  # Docker orchestration
└── README.md
```

---

## 📌 Notes

* All services are configured to work together via Docker Compose.
* You can build custom dashboards in Grafana using metrics from Prometheus such as:

  * API request duration
  * Status codes
  * Total API hits

---

🎯

```

