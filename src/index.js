// Actutal Prices
let prices = {
  classic: 269.99,
  standout: 322.99,
  premium: 394.99,
};

// Deals
let second_bite_deals = {
  classic: {
    offer: 2,
    price: prices.classic,
  },
  standout: {
    offer: 0,
    price: prices.standout,
  },
  premium: {
    offer: 0,
    price: prices.premium,
  },
};

let axil_coffee_roasters_deals = {
  classic: {
    offer: 0,
    price: prices.classic,
  },
  standout: {
    offer: 0,
    price: 299.99,
  },
  premium: {
    offer: 0,
    price: prices.premium,
  },
};

let myer_deals = {
  classic: {
    offer: 0,
    price: prices.classic,
  },
  standout: {
    offer: 4,
    price: prices.standout,
  },
  premium: {
    offer: 0,
    price: 389.99,
  },
};

// Calulating total price of items in cart
function itemTotal(items, price, deal) {
  let count = 0;
  let total = 0;
  let i = items.length;
  if (items.length === 0) {
    return 0;
  }
  while (i >= 1) {
    if (deal > 0) {
      if (count === deal) {
        i -= 1;
        count = 0;
      } else {
        total = total + price;
        i -= 1;
        count += 1;
      }
    } else {
      total = total + price;
      i -= 1;
    }
  }
  return total;
}

// Handling customer cart
function cartTotal(cart) {
  let items = cart.items;
  let total = 0;
  const classicItems = items.filter((item) => item === "classic");
  const standoutItems = items.filter((item) => item === "standout");
  const premiumItems = items.filter((item) => item === "premium");

  switch (cart.customer) {
    case "SecondBite":
      total =
        itemTotal(
          classicItems,
          second_bite_deals.classic.price,
          second_bite_deals.classic.offer
        ) +
        itemTotal(
          standoutItems,
          second_bite_deals.standout.price,
          second_bite_deals.standout.offer
        ) +
        itemTotal(
          premiumItems,
          second_bite_deals.premium.price,
          second_bite_deals.premium.offer
        );
      break;
    case "Axil Coffee Roasters":
      total =
        itemTotal(
          classicItems,
          axil_coffee_roasters_deals.classic.price,
          axil_coffee_roasters_deals.classic.offer
        ) +
        +itemTotal(
          standoutItems,
          axil_coffee_roasters_deals.standout.price,
          axil_coffee_roasters_deals.standout.offer
        ) +
        itemTotal(
          premiumItems,
          axil_coffee_roasters_deals.premium.price,
          axil_coffee_roasters_deals.premium.offer
        );
      break;
    case "MYER":
      total =
        itemTotal(
          classicItems,
          myer_deals.classic.price,
          myer_deals.classic.offer
        ) +
        +itemTotal(
          standoutItems,
          myer_deals.standout.price,
          myer_deals.standout.offer
        ) +
        itemTotal(
          premiumItems,
          myer_deals.premium.price,
          myer_deals.premium.offer
        );
      break;
    default:
      total =
        itemTotal(classicItems, prices.classic, 0) +
        +itemTotal(standoutItems, prices.standout, 0) +
        itemTotal(premiumItems, prices.premium, 0);
      break;
  }
  return total;
}

// Customers
const customer_default = {
  customer: "Default",
  items: ["classic", "standout", "premium"],
};

const customer_secondBite = {
  customer: "SecondBite",
  items: ["classic", "classic", "classic", "premium"],
};

const customer_axil_coffee_roasters = {
  customer: "Axil Coffee Roasters",
  items: ["standout", "standout", "standout", "premium"],
};

const c1 = cartTotal(customer_default);
const c2 = cartTotal(customer_secondBite);
const c3 = cartTotal(customer_axil_coffee_roasters);

// Displaying result in index.html
const app = document.getElementById("app");
function appendData(customer, total) {
  const title = document.createElement("h2");
  let textNode = document.createTextNode(
    `Customer: ${customer}, Total: ${total}`
  );
  title.appendChild(textNode);
  app.appendChild(title);
}

appendData(customer_default.customer, c1);
appendData(customer_secondBite.customer, c2);
appendData(customer_axil_coffee_roasters.customer, c3);
