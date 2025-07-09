



function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 1000); // simulate 1 second delay
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orders = [
        { orderId: 101, item: "Laptop", amount: 1500 },
         { orderId: 102, item: "Phone", amount: 700 },
      ];
      resolve(orders);
    }, 1000); // simulate 1 second delay
  });
}

async function showDetails() {
  try {
    const user = await getUser();
    console.log("User:", user);
const orders = await getOrders(user.id);
    console.log("Orders:", orders);
  } catch (err) {
    console.error("Error:", err.message);
    }

    
}

showDetails();