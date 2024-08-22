import express from "express";

const app = express();

app.use(express.json());

const users = [
  {
    name: "Harish",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johKidneys = users[0].kidneys;
  const numOfKidneys = johKidneys.length;
  let healthyKidneys = 0; // Use let instead of const to allow reassignment
  for (let i = 0; i < numOfKidneys; i++) {
    if (johKidneys[i].healthy) {
      healthyKidneys += 1;
    }
  }
  const unhealthyKidneys = numOfKidneys - healthyKidneys;
  console.log(healthyKidneys);

  res.json({
    numOfKidneys,
    healthyKidneys,
    unhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    message: "Done",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  users[0].kidneys = users[0].kidneys.filter(
    (kidney) => kidney.healthy === true
  );
  res.json({ message: "DELETE request received" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
