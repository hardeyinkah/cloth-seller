const WHATSAPP_NUMBER = "234XXXXXXXXXX"; // TODO: replace with your real WhatsApp number (country code + number, no + or spaces) before launch

const products = [
  { id: "hoodie", name: "Classic Hoodie", price: 25, was: 50, category: "hoodies", world: "men", sold: "2.1k+", rating: 4.8, deal: true, sale: "hot", look: false, sizes: ["S", "M", "L", "XL"], description: "Soft fleece hoodie with a relaxed street silhouette. Everyday layer for cool evenings.", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80" },
  { id: "jacket", name: "Street Jacket", price: 40, was: 79, category: "jackets", world: "men", sold: "980+", rating: 4.7, deal: true, sale: "bestseller", look: false, sizes: ["S", "M", "L", "XL"], description: "Structured street jacket with clean lines. Built to move from city commute to night plans.", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80" },
  { id: "summer", name: "Summer Fit", price: 30, was: 55, category: "dresses", world: "women", sold: "1.4k+", rating: 4.6, deal: true, sale: "new", look: true, sizes: ["XS", "S", "M", "L"], description: "Light summer ready-to-wear with easy drape. Pair with the crossbody for the full campaign look.", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80" },
  { id: "jeans", name: "Relaxed Denim", price: 28, was: 60, category: "bottoms", world: "both", sold: "3.4k+", rating: 4.5, deal: true, sale: "light", look: false, sizes: ["28", "30", "32", "34"], description: "Relaxed denim with a soft wash. Comfort-first cut without losing shape.", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1475178626620-a4d048dff47a?auto=format&fit=crop&w=800&q=80" },
  { id: "sneakers", name: "Everyday Sneakers", price: 35, was: 70, category: "shoes", world: "both", sold: "5.2k+", rating: 4.9, deal: true, sale: "bestseller", look: false, sizes: ["40", "41", "42", "43", "44"], description: "Clean everyday sneakers with cushioned sole. The quiet essential under any look.", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80" },
  { id: "dress", name: "Silk Evening Dress", price: 48, was: 95, category: "dresses", world: "women", sold: "640+", rating: 4.8, deal: false, sale: "new", look: true, sizes: ["XS", "S", "M", "L"], description: "Fluid evening dress with a soft sheen. Featured in the Shop the Look edit.", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80" },
  { id: "bag", name: "Crossbody Bag", price: 22, was: 45, category: "accessories", world: "women", sold: "1.8k+", rating: 4.4, deal: true, sale: "trends", look: true, sizes: ["One Size"], description: "A house classic restaged for the season. Structured leather, gold-tone hardware, day-to-night silhouette.", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1590874103328-eac38a67478a?auto=format&fit=crop&w=800&q=80" },
  { id: "shades", name: "Studio Sunglasses", price: 12, was: 28, category: "accessories", world: "both", sold: "4.1k+", rating: 4.3, deal: false, sale: "trends", look: true, sizes: ["One Size"], description: "Studio sunglasses with a bold frame. Finish the look in one tap.", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80" },
  { id: "tee", name: "Oversized Tee", price: 18, was: 32, category: "hoodies", world: "men", sold: "6.7k+", rating: 4.6, deal: false, sale: "bestseller", look: false, sizes: ["S", "M", "L", "XL"], description: "Oversized cotton tee with dropped shoulders. Layer under jackets or wear alone.", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80" },
  { id: "bomber", name: "Bomber Jacket", price: 42, was: 88, category: "jackets", world: "men", sold: "720+", rating: 4.7, deal: false, sale: "bestseller", look: false, sizes: ["S", "M", "L", "XL"], description: "Modern bomber with a clean finish. Sharp enough for evening, easy enough for day.", image: "https://images.unsplash.com/photo-1520975867597-0af37a22e31e?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80" },
  { id: "boots", name: "Chunky Boots", price: 38, was: 75, category: "shoes", world: "women", sold: "890+", rating: 4.5, deal: false, sale: "light", look: false, sizes: ["37", "38", "39", "40", "41"], description: "Chunky sole boots with firm structure. Ground any dress or denim look.", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80" },
  { id: "cap", name: "Logo Cap", price: 10, was: 20, category: "accessories", world: "both", sold: "2.9k+", rating: 4.2, deal: false, sale: "hot", look: false, sizes: ["One Size"], description: "Logo cap with adjustable fit. The fastest finishing touch.", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80", imageBack: "https://images.unsplash.com/photo-1534215754734-18e55d13e846?auto=format&fit=crop&w=800&q=80" }
];

const SALE_META = {
  hot: { label: "Hot Sale", className: "badge-hot" },
  new: { label: "New Release", className: "badge-new" },
  light: { label: "Light Deal", className: "badge-light" },
  trends: { label: "Trends", className: "badge-trends" },
  bestseller: { label: "Bestseller", className: "badge-bestseller" }
};

function saleMeta(product) {
  return SALE_META[product.sale] || SALE_META.trends;
}

const LOOK_IDS = ["bag", "shades", "dress", "summer"];

let cart = loadCart();
let wishlist = loadWishlist();
let activeCategory = "all";
let activeWorld = "all";
let activePrice = "all";
let searchQuery = "";
let drawerMode = "cart";
let pdpQty = 1;
let pdpSize = "";
let pdpProductId = null;
let firstOrderOffer = localStorage.getItem("fashion-first-offer") === "1";
let subscribed = localStorage.getItem("fashion-subscribed") === "1";

const dealGrid = document.getElementById("dealGrid");
const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const resultsLabel = document.getElementById("resultsLabel");
const cartCount = document.getElementById("cartCount");
const wishCount = document.getElementById("wishCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartFoot = document.getElementById("cartFoot");
const drawerTitle = document.getElementById("drawerTitle");
const toast = document.getElementById("toast");
const siteHeader = document.getElementById("siteHeader");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");
const searchOverlay = document.getElementById("searchOverlay");

function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function discount(product) {
  return Math.round(((product.was - product.price) / product.was) * 100);
}

function observeCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".card").forEach((card) => {
    observer.observe(card);
    if (card.getBoundingClientRect().top < window.innerHeight * 0.9) {
      card.classList.add("show");
    }
  });
}

function priceOk(product) {
  if (activePrice === "under20") return product.price < 20;
  if (activePrice === "20to40") return product.price >= 20 && product.price <= 40;
  if (activePrice === "40plus") return product.price > 40;
  return true;
}

function filteredProducts() {
  return products.filter((product) => {
    const categoryOk = activeCategory === "all" || product.category === activeCategory;
    const worldOk = activeWorld === "all" || product.world === activeWorld || product.world === "both";
    const query = searchQuery.trim().toLowerCase();
    const searchOk = !query || product.name.toLowerCase().includes(query);
    return categoryOk && worldOk && searchOk && priceOk(product);
  });
}

function worldLabel() {
  if (activeWorld === "women") return "Women";
  if (activeWorld === "men") return "Men";
  return "";
}

function priceLabel() {
  if (activePrice === "under20") return "Under $20";
  if (activePrice === "20to40") return "$20–$40";
  if (activePrice === "40plus") return "$40+";
  return "";
}

function renderProducts() {
  const deals = products.filter((product) => product.deal);
  dealGrid.innerHTML = deals.map((product, index) => cardHTML(product, { deal: true, delay: index * 0.07 })).join("");

  const list = filteredProducts();
  productGrid.innerHTML = list.map((product) => cardHTML(product)).join("");
  emptyState.hidden = list.length > 0;

  const bits = [];
  if (worldLabel()) bits.push(worldLabel());
  if (priceLabel()) bits.push(priceLabel());
  if (searchQuery.trim()) bits.push(`“${searchQuery.trim()}”`);
  resultsLabel.textContent = bits.length
    ? `${list.length} result${list.length === 1 ? "" : "s"} · ${bits.join(" · ")}`
    : "Shop the full drop";

  renderLookStrip();
  updatePriceChipLabels();
  observeCards();
}

function loadCart() {
  try { return JSON.parse(localStorage.getItem("fashion-cart")) || []; }
  catch (error) { return []; }
}

function loadWishlist() {
  try { return JSON.parse(localStorage.getItem("fashion-wish")) || []; }
  catch (error) { return []; }
}

function saveCart() {
  localStorage.setItem("fashion-cart", JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem("fashion-wish", JSON.stringify(wishlist));
}

function findProduct(id) {
  return products.find((product) => product.id === id);
}

function productBackImage(product) {
  return product.imageBack || product.image;
}

function flipMediaHTML(product) {
  const back = productBackImage(product);
  return `
    <div class="img-flip" data-flip-root>
      <div class="img-flip-inner">
        <div class="img-flip-face img-flip-front">
          <img src="${product.image}" alt="${product.name} front">
        </div>
        <div class="img-flip-face img-flip-back">
          <img src="${back}" alt="${product.name} back">
        </div>
      </div>
      <button type="button" class="flip-btn" data-flip aria-label="Flip ${product.name} to see back">Back</button>
    </div>
  `;
}

function setFlipState(root, flipped) {
  if (!root) return;
  root.classList.toggle("is-flipped", flipped);
  const btn = root.querySelector("[data-flip]");
  if (btn) btn.textContent = flipped ? "Front" : "Back";
}

function toggleFlip(root) {
  if (!root) return;
  setFlipState(root, !root.classList.contains("is-flipped"));
}

function addToCart(id, qty = 1) {
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  renderCart();
  showToast(qty > 1 ? `Added ${qty} to bag` : "Added to bag");
}

function changeQty(id, delta) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((entry) => entry.id !== id);
  saveCart();
  renderCart();
}

function toggleWish(id) {
  if (wishlist.includes(id)) wishlist = wishlist.filter((item) => item !== id);
  else wishlist.push(id);
  saveWishlist();
  renderCart();
  renderProducts();
  showToast(wishlist.includes(id) ? "Saved to wishlist" : "Removed from wishlist");
}

function cartLines() {
  return cart.map((item) => {
    const product = findProduct(item.id);
    return { ...item, product, lineTotal: product.price * item.qty };
  }).filter((item) => item.product);
}

function renderCart() {
  const lines = cartLines();
  const count = lines.reduce((sum, item) => sum + item.qty, 0);
  const total = lines.reduce((sum, item) => sum + item.lineTotal, 0);
  cartCount.textContent = count;
  wishCount.textContent = wishlist.length;
  cartTotal.textContent = formatMoney(total);

  if (drawerMode === "wish") {
    drawerTitle.textContent = "Wishlist";
    cartFoot.hidden = true;
    const saved = wishlist.map(findProduct).filter(Boolean);
    cartItems.innerHTML = saved.length
      ? saved.map((product) => `
          <div class="cart-item">
            <img src="${product.image}" alt="${product.name}">
            <div>
              <h4>${product.name}</h4>
              <div class="qty">
                <button type="button" data-add="${product.id}">Add</button>
                <button type="button" data-wish="${product.id}">Remove</button>
              </div>
            </div>
            <span class="cart-item-price">${formatMoney(product.price)}</span>
          </div>
        `).join("")
      : `<p class="cart-empty">Your wishlist is empty.</p>`;
    return;
  }

  drawerTitle.textContent = "Your Bag";
  cartFoot.hidden = false;
  if (!lines.length) {
    cartItems.innerHTML = `<p class="cart-empty">Your bag is empty. Add a few pieces first.</p>`;
    return;
  }

  cartItems.innerHTML = lines.map((item) => `
    <div class="cart-item">
      <img src="${item.product.image}" alt="${item.product.name}">
      <div>
        <h4>${item.product.name}</h4>
        <div class="qty">
          <button type="button" data-qty="${item.id}" data-delta="-1">−</button>
          <span>${item.qty}</span>
          <button type="button" data-qty="${item.id}" data-delta="1">+</button>
        </div>
      </div>
      <span class="cart-item-price">${formatMoney(item.lineTotal)}</span>
    </div>
  `).join("");
}

function openDrawer(mode) {
  drawerMode = mode;
  renderCart();
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartOverlay.hidden = false;
}

function closeDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartOverlay.hidden = true;
}

function setMenu(open) {
  sideMenu.classList.toggle("open", open);
  sideMenu.setAttribute("aria-hidden", open ? "false" : "true");
  menuOverlay.hidden = !open;
}

function setSearch(open) {
  searchOverlay.hidden = !open;
  if (open) document.getElementById("searchInput").focus();
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => { toast.hidden = true; }, 1800);
}

function startCountdown() {
  const end = new Date();
  end.setHours(23, 59, 59, 999);

  function tick() {
    const diff = Math.max(0, end.getTime() - Date.now());
    document.getElementById("hours").textContent = String(Math.floor(diff / 3600000)).padStart(2, "0");
    document.getElementById("minutes").textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    document.getElementById("seconds").textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
}

function orderMessage(name, address, phone) {
  const lines = cartLines();
  const itemText = lines.length
    ? lines.map((item) => `- ${item.product.name} x${item.qty} (${formatMoney(item.lineTotal)})`).join("\n")
    : "- No items in bag yet";
  const total = lines.reduce((sum, item) => sum + item.lineTotal, 0);
  const offerLine = firstOrderOffer
    ? "\nOffer: FIRST15 — 15% off + free shipping on first order"
    : "";
  return `New Fashion Store order
Name: ${name}
Address: ${address}
Phone: ${phone}
Market: ${selectedCountry.name} (${selectedCountry.currency})

Items:
${itemText}

Total: ${formatMoney(total)}${offerLine}`;
}

function setCategory(category) {
  activeCategory = category || "all";
  document.querySelectorAll("#categoryNav .chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === activeCategory);
  });
}

function setPriceFilter(price) {
  activePrice = price || "all";
  document.querySelectorAll(".price-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.price === activePrice);
  });
}

function shopWorld(world) {
  activeWorld = world || "all";
  setCategory("all");
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function updateHeader() {
  const scrolled = window.scrollY > 80;
  siteHeader.classList.toggle("scrolled", scrolled);
  document.body.classList.toggle("scrolled", scrolled);
}

document.getElementById("menuBtn").addEventListener("click", () => setMenu(true));
document.getElementById("menuClose").addEventListener("click", () => setMenu(false));
menuOverlay.addEventListener("click", () => setMenu(false));
document.getElementById("searchOpen").addEventListener("click", () => setSearch(true));
document.getElementById("searchClose").addEventListener("click", () => setSearch(false));

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = document.getElementById("searchInput").value;
  setSearch(false);
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("categoryNav").addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  setCategory(chip.dataset.category);
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("priceNav").addEventListener("click", (event) => {
  const chip = event.target.closest(".price-chip");
  if (!chip) return;
  setPriceFilter(chip.dataset.price);
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

document.body.addEventListener("click", (event) => {
  // Wish and add-to-bag controls are checked first because they can be
  // nested inside a [data-open-product] wrapper (e.g. the .img-box on a
  // product card) — without this order, closest() would match the wrapper
  // and open the product modal instead of firing the wish/add action.
  const flipBtn = event.target.closest("[data-flip]");
  if (flipBtn) {
    event.preventDefault();
    event.stopPropagation();
    toggleFlip(flipBtn.closest("[data-flip-root], .img-flip"));
    return;
  }

  const pdpFace = event.target.closest("[data-pdp-face]");
  if (pdpFace) {
    event.preventDefault();
    event.stopPropagation();
    const face = pdpFace.dataset.pdpFace;
    const root = document.getElementById("pdpFlip");
    setFlipState(root, face === "back");
    document.querySelectorAll("[data-pdp-face]").forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.pdpFace === face);
    });
    return;
  }

  const wish = event.target.closest("[data-wish]");
  if (wish) {
    event.preventDefault();
    event.stopPropagation();
    toggleWish(wish.dataset.wish);
    return;
  }

  const add = event.target.closest("[data-add]");
  if (add) {
    event.preventDefault();
    event.stopPropagation();
    addToCart(add.dataset.add);
    return;
  }

  const openProduct = event.target.closest("[data-open-product]");
  if (openProduct) {
    event.preventDefault();
    openProductModal(openProduct.dataset.openProduct);
    return;
  }

  const cardOpen = event.target.closest(".card[data-id]");
  if (cardOpen && !event.target.closest(".buy-btn, a, [data-flip], .flip-controls")) {
    openProductModal(cardOpen.dataset.id);
    return;
  }

  const worldBtn = event.target.closest("[data-world]");
  if (worldBtn) {
    event.preventDefault();
    setMenu(false);
    shopWorld(worldBtn.dataset.world);
    return;
  }

  const categoryLink = event.target.closest("[data-category]:not(.chip)");
  if (categoryLink) {
    setMenu(false);
    activeWorld = "all";
    setCategory(categoryLink.dataset.category);
    renderProducts();
  }

  const qtyBtn = event.target.closest("[data-qty]");
  if (qtyBtn) changeQty(qtyBtn.dataset.qty, Number(qtyBtn.dataset.delta));
});

document.getElementById("cartBtn").addEventListener("click", () => openDrawer("cart"));
document.getElementById("wishBtn").addEventListener("click", () => openDrawer("wish"));
document.getElementById("closeCart").addEventListener("click", closeDrawer);
cartOverlay.addEventListener("click", closeDrawer);
document.getElementById("goCheckout").addEventListener("click", () => {
  closeDrawer();
  openCheckoutModal();
});

document.getElementById("orderForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const form = new FormData(this);
  window.open(waLink(orderMessage(form.get("name"), form.get("address"), form.get("phone"))), "_blank");
  closeCheckoutModal();

  // The FIRST15 welcome offer is meant for a customer's first order only —
  // consume it here so it doesn't keep attaching itself to every order
  // this browser ever places.
  if (firstOrderOffer) {
    firstOrderOffer = false;
    localStorage.removeItem("fashion-first-offer");
    updateOfferChip();
  }
});

function openCheckoutModal() {
  document.getElementById("checkoutModal").hidden = false;
  document.getElementById("checkoutOverlay").hidden = false;
  setMenu(false);
  setTimeout(() => {
    document.querySelector("#orderForm input[name='name']")?.focus();
  }, 50);
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").hidden = true;
  document.getElementById("checkoutOverlay").hidden = true;
}

document.getElementById("checkoutClose").addEventListener("click", closeCheckoutModal);
document.getElementById("checkoutOverlay").addEventListener("click", closeCheckoutModal);

document.body.addEventListener("click", (event) => {
  const openCheckout = event.target.closest("[data-open-checkout]");
  if (!openCheckout) return;
  event.preventDefault();
  openCheckoutModal();
});

window.openCheckoutModal = openCheckoutModal;

document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(event.target).get("email");
  applySignup(email);
  event.target.reset();
});

window.addEventListener("scroll", updateHeader, { passive: true });

/* ---------- STORE LOCATOR / CLIENT SERVICE / COUNTRY ---------- */
const stores = [
  { city: "Lagos", name: "Fashion Victoria Island", address: "14 Akin Adesola Street, Victoria Island", hours: "10:00 – 20:00", services: ["Appointments", "Click & Collect"] },
  { city: "Lagos", name: "Fashion Ikeja City Mall", address: "Obafemi Awolowo Way, Alausa", hours: "10:00 – 21:00", services: ["WhatsApp Pickup", "Alterations"] },
  { city: "Abuja", name: "Fashion Maitama", address: "Aguiyi Ironsi Street, Maitama", hours: "10:00 – 19:00", services: ["Private Client", "Appointments"] },
  { city: "London", name: "Fashion Mayfair", address: "18 Bond Street, Mayfair", hours: "10:00 – 19:00", services: ["Appointments", "Personal Shopping"] },
  { city: "Paris", name: "Fashion Saint-Honoré", address: "2 Rue du Faubourg Saint-Honoré", hours: "10:30 – 19:30", services: ["Appointments", "Click & Collect"] },
  { city: "New York", name: "Fashion SoHo", address: "450 Broadway, SoHo", hours: "11:00 – 20:00", services: ["Personal Shopping", "Returns"] },
  { city: "Dubai", name: "Fashion Dubai Mall", address: "Fashion Avenue, Downtown Dubai", hours: "10:00 – 22:00", services: ["VIP Suite", "Appointments"] },
  { city: "Accra", name: "Fashion Airport City", address: "Airport Residential Area", hours: "10:00 – 19:00", services: ["WhatsApp Pickup"] }
];

const countries = [
  { code: "NG", name: "Nigeria", flag: "🇳🇬", lang: "English", currency: "NGN", rate: 1550 },
  { code: "GH", name: "Ghana", flag: "🇬🇭", lang: "English", currency: "GHS", rate: 15.5 },
  { code: "KE", name: "Kenya", flag: "🇰🇪", lang: "English", currency: "KES", rate: 129 },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", lang: "English", currency: "ZAR", rate: 18.2 },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", lang: "English", currency: "GBP", rate: 0.78 },
  { code: "US", name: "United States", flag: "🇺🇸", lang: "English", currency: "USD", rate: 1 },
  { code: "FR", name: "France", flag: "🇫🇷", lang: "Français", currency: "EUR", rate: 0.92 },
  { code: "IT", name: "Italy", flag: "🇮🇹", lang: "Italiano", currency: "EUR", rate: 0.92 },
  { code: "DE", name: "Germany", flag: "🇩🇪", lang: "Deutsch", currency: "EUR", rate: 0.92 },
  { code: "ES", name: "Spain", flag: "🇪🇸", lang: "Español", currency: "EUR", rate: 0.92 },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", lang: "English", currency: "AED", rate: 3.67 },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", lang: "العربية", currency: "SAR", rate: 3.75 },
  { code: "JP", name: "Japan", flag: "🇯🇵", lang: "日本語", currency: "JPY", rate: 150 },
  { code: "KR", name: "South Korea", flag: "🇰🇷", lang: "한국어", currency: "KRW", rate: 1350 },
  { code: "CN", name: "China", flag: "🇨🇳", lang: "中文", currency: "CNY", rate: 7.2 },
  { code: "IN", name: "India", flag: "🇮🇳", lang: "English", currency: "INR", rate: 83 },
  { code: "BR", name: "Brazil", flag: "🇧🇷", lang: "Português", currency: "BRL", rate: 5.1 },
  { code: "CA", name: "Canada", flag: "🇨🇦", lang: "English", currency: "CAD", rate: 1.36 },
  { code: "AU", name: "Australia", flag: "🇦🇺", lang: "English", currency: "AUD", rate: 1.52 },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", lang: "Nederlands", currency: "EUR", rate: 0.92 }
];

const panelContent = {
  client: {
    title: "Client Service",
    html: `
      <h3>Contact Us</h3>
      <p>Our client advisors are available daily via WhatsApp for orders, sizing, and boutique appointments.</p>
      <p><button type="button" data-open-checkout>Start WhatsApp checkout</button> or message us from the green chat button.</p>
      <h3>Orders & Shipping</h3>
      <ul>
        <li>Complimentary shipping over $50 (or local equivalent)</li>
        <li>Same-day Lagos dispatch on orders before 14:00</li>
        <li>International delivery 5–10 business days</li>
      </ul>
      <h3>Returns & Exchanges</h3>
      <p>Unused items with tags may be returned within 14 days. Boutique exchanges are available in your selected market.</p>
      <h3>FAQs</h3>
      <ul>
        <li>How do I track an order? Reply on WhatsApp with your name and phone.</li>
        <li>Can I reserve in store? Yes — use Store Locator and request an appointment.</li>
        <li>Do you gift wrap? Available on request at checkout.</li>
      </ul>
    `
  },
  about: {
    title: "About Us",
    html: `
      <h3>Our Maison</h3>
      <p>Fashion Store blends maison storytelling with marketplace access — editorial campaigns up front, sharp deals and WhatsApp checkout underneath.</p>
      <h3>Sustainability</h3>
      <p>We prioritize responsible materials where possible, repair-friendly construction, and digital receipts to reduce paper waste.</p>
      <h3>Careers</h3>
      <p>We hire stylists, client advisors, and creators across Lagos, London, and Dubai. Reach out via WhatsApp with “Careers” in your message.</p>
    `
  },
  legal: {
    title: "Legal",
    html: `
      <h3>Privacy Policy</h3>
      <p>We collect only what we need for orders and client service (name, address, phone, email). Cart and wishlist stay on your device unless you submit an order.</p>
      <h3>Terms of Use</h3>
      <p>By shopping here you agree that product availability, pricing, and promotions may change. WhatsApp confirmation finalizes your order.</p>
      <h3>Cookie Settings</h3>
      <p>We use essential storage for cart, wishlist, and country preference. No advertising trackers are loaded by default.</p>
      <h3>Accessibility</h3>
      <p>We aim for clear contrast, keyboard-friendly controls, and descriptive labels. Tell Client Service if something is hard to use.</p>
    `
  },
  stores: {
    title: "Store Appointments",
    html: `
      <h3>Book a visit</h3>
      <p>Choose a boutique from the Store Locator, then message us on WhatsApp with your preferred time and city.</p>
      <h3>City Guides</h3>
      <p>Lagos · Abuja · London · Paris · New York · Dubai · Accra — more cities on request.</p>
      <p><a href="#stores">Open Store Locator</a></p>
    `
  }
};

let selectedCountry = loadCountry();
let activeLangFilter = "All";
let storeQuery = "";

const storeGrid = document.getElementById("storeGrid");
const infoPanel = document.getElementById("infoPanel");
const panelOverlay = document.getElementById("panelOverlay");
const panelTitle = document.getElementById("panelTitle");
const panelBody = document.getElementById("panelBody");
const countryModal = document.getElementById("countryModal");
const countryOverlay = document.getElementById("countryOverlay");
const countryList = document.getElementById("countryList");
const langPills = document.getElementById("langPills");

function loadCountry() {
  try {
    return JSON.parse(localStorage.getItem("fashion-country")) || countries[0];
  } catch (error) {
    return countries[0];
  }
}

function saveCountry() {
  localStorage.setItem("fashion-country", JSON.stringify(selectedCountry));
}

function langCode() {
  const map = { "Français": "fr", "Italiano": "it", "Deutsch": "de", "Español": "es" };
  return map[selectedCountry.lang] || "en";
}

const UI_STRINGS = {
  en: {
    menuKicker: "Maison", navWomen: "Women", navMen: "Men", navGifts: "Gifts", navDeals: "Flash Deals",
    navCollection: "Collection", navStories: "Stories", navOrder: "Order", navStores: "Store Locator",
    navClientService: "Client Service", navAbout: "About Us", navCountryLang: "Country & Language",
    navReplayTour: "Replay site guide", searchPrompt: "What are you looking for?",
    searchPlaceholder: "Handbags, jackets, dresses...", searchBtn: "Search",
    heroKicker: "Spring Summer 2026", heroTitle: "Elevate Your Style", heroSub: "Premium fashion made for you",
    shopWomen: "Shop Women", shopMen: "Shop Men", discoverCampaign: "Discover the Campaign",
    dealsTitle: "Flash Deals", dealsSub: "Today's prices reset at midnight — new deals daily",
    dealsEndsIn: "Today's prices end in", collectionTitle: "Our Collection", collectionSub: "Shop the full drop", noResults: "No products match your search.",
    checkoutTitle: "Order on WhatsApp", checkoutNote: "",
    fieldName: "Full Name", fieldAddress: "Address", fieldPhone: "Phone Number", fieldEmail: "Email address",
    checkoutSubmit: "Send on WhatsApp", boutiquesKicker: "Boutiques", storeLocatorTitle: "Store Locator",
    storeLocatorLead: "Find a Fashion boutique near you. Book a private appointment or collect your WhatsApp order in store.",
    storeSearchPlaceholder: "Search by city or neighborhood",
    newsletterTitle: "Join the maison",
    newsletterBody: "Enjoy <strong>15% off + free shipping</strong> on your first order. Be first to the next drop.",
    newsletterSubmit: "Sign up", addToBag: "Add to bag", buyWhatsApp: "Buy on WhatsApp", viewDetails: "View details",
    shopTheLook: "Shop the look"
  },
  fr: {
    menuKicker: "Maison", navWomen: "Femme", navMen: "Homme", navGifts: "Cadeaux", navDeals: "Ventes flash",
    navCollection: "Collection", navStories: "Histoires", navOrder: "Commander", navStores: "Boutiques",
    navClientService: "Service client", navAbout: "À propos", navCountryLang: "Pays et langue",
    navReplayTour: "Revoir la visite guidée", searchPrompt: "Que recherchez-vous ?",
    searchPlaceholder: "Sacs, vestes, robes...", searchBtn: "Rechercher",
    heroKicker: "Printemps Été 2026", heroTitle: "Sublimez votre style", heroSub: "Une mode raffinée, pensée pour vous",
    shopWomen: "Acheter Femme", shopMen: "Acheter Homme", discoverCampaign: "Découvrir la campagne",
    dealsTitle: "Ventes flash", dealsSub: "Les prix du jour se réinitialisent à minuit — nouvelles offres chaque jour",
    dealsEndsIn: "Les prix du jour se terminent dans", collectionTitle: "Notre collection", collectionSub: "Découvrez toute la collection", noResults: "Aucun article ne correspond à votre recherche.",
    checkoutTitle: "Commander sur WhatsApp", checkoutNote: "",
    fieldName: "Nom complet", fieldAddress: "Adresse", fieldPhone: "Numéro de téléphone", fieldEmail: "Adresse e-mail",
    checkoutSubmit: "Envoyer sur WhatsApp", boutiquesKicker: "Boutiques", storeLocatorTitle: "Trouver une boutique",
    storeLocatorLead: "Trouvez une boutique Fashion près de chez vous. Réservez un rendez-vous privé ou récupérez votre commande WhatsApp en boutique.",
    storeSearchPlaceholder: "Rechercher par ville ou quartier",
    newsletterTitle: "Rejoindre la maison",
    newsletterBody: "Profitez de <strong>15 % de réduction + livraison offerte</strong> sur votre première commande. Soyez informé·e des prochains drops.",
    newsletterSubmit: "S'inscrire", addToBag: "Ajouter au panier", buyWhatsApp: "Acheter sur WhatsApp", viewDetails: "Voir les détails",
    shopTheLook: "Voir la tenue"
  },
  it: {
    menuKicker: "Maison", navWomen: "Donna", navMen: "Uomo", navGifts: "Regali", navDeals: "Offerte lampo",
    navCollection: "Collezione", navStories: "Storie", navOrder: "Ordina", navStores: "Boutique",
    navClientService: "Servizio clienti", navAbout: "Chi siamo", navCountryLang: "Paese e lingua",
    navReplayTour: "Rivedi la guida al sito", searchPrompt: "Cosa stai cercando?",
    searchPlaceholder: "Borse, giacche, abiti...", searchBtn: "Cerca",
    heroKicker: "Primavera Estate 2026", heroTitle: "Eleva il tuo stile", heroSub: "Moda di qualità pensata per te",
    shopWomen: "Acquista Donna", shopMen: "Acquista Uomo", discoverCampaign: "Scopri la campagna",
    dealsTitle: "Offerte lampo", dealsSub: "I prezzi di oggi si azzerano a mezzanotte — nuove offerte ogni giorno",
    dealsEndsIn: "I prezzi di oggi terminano tra", collectionTitle: "La nostra collezione", collectionSub: "Scopri l'intera collezione", noResults: "Nessun prodotto corrisponde alla tua ricerca.",
    checkoutTitle: "Ordina su WhatsApp", checkoutNote: "",
    fieldName: "Nome completo", fieldAddress: "Indirizzo", fieldPhone: "Numero di telefono", fieldEmail: "Indirizzo email",
    checkoutSubmit: "Invia su WhatsApp", boutiquesKicker: "Boutique", storeLocatorTitle: "Trova un negozio",
    storeLocatorLead: "Trova una boutique Fashion vicino a te. Prenota un appuntamento privato o ritira il tuo ordine WhatsApp in negozio.",
    storeSearchPlaceholder: "Cerca per città o quartiere",
    newsletterTitle: "Unisciti alla maison",
    newsletterBody: "Goditi <strong>il 15% di sconto + spedizione gratuita</strong> sul primo ordine. Sii il primo a scoprire i nuovi drop.",
    newsletterSubmit: "Iscriviti", addToBag: "Aggiungi alla borsa", buyWhatsApp: "Acquista su WhatsApp", viewDetails: "Vedi dettagli",
    shopTheLook: "Scopri il look"
  },
  de: {
    menuKicker: "Maison", navWomen: "Damen", navMen: "Herren", navGifts: "Geschenke", navDeals: "Blitzangebote",
    navCollection: "Kollektion", navStories: "Stories", navOrder: "Bestellen", navStores: "Filialfinder",
    navClientService: "Kundenservice", navAbout: "Über uns", navCountryLang: "Land & Sprache",
    navReplayTour: "Tour erneut ansehen", searchPrompt: "Wonach suchst du?",
    searchPlaceholder: "Taschen, Jacken, Kleider...", searchBtn: "Suchen",
    heroKicker: "Frühjahr Sommer 2026", heroTitle: "Werte deinen Stil auf", heroSub: "Hochwertige Mode, gemacht für dich",
    shopWomen: "Damen entdecken", shopMen: "Herren entdecken", discoverCampaign: "Kampagne entdecken",
    dealsTitle: "Blitzangebote", dealsSub: "Die heutigen Preise werden um Mitternacht zurückgesetzt — täglich neue Angebote",
    dealsEndsIn: "Heutige Preise enden in", collectionTitle: "Unsere Kollektion", collectionSub: "Entdecke die ganze Kollektion", noResults: "Keine Produkte entsprechen deiner Suche.",
    checkoutTitle: "Per WhatsApp bestellen", checkoutNote: "",
    fieldName: "Vollständiger Name", fieldAddress: "Adresse", fieldPhone: "Telefonnummer", fieldEmail: "E-Mail-Adresse",
    checkoutSubmit: "Per WhatsApp senden", boutiquesKicker: "Boutiquen", storeLocatorTitle: "Filialfinder",
    storeLocatorLead: "Finde eine Fashion-Boutique in deiner Nähe. Vereinbare einen privaten Termin oder hole deine WhatsApp-Bestellung im Geschäft ab.",
    storeSearchPlaceholder: "Nach Stadt oder Stadtteil suchen",
    newsletterTitle: "Der Maison beitreten",
    newsletterBody: "Sichere dir <strong>15 % Rabatt + kostenlosen Versand</strong> auf deine erste Bestellung. Sei als Erste·r bei neuen Drops dabei.",
    newsletterSubmit: "Anmelden", addToBag: "In die Tasche", buyWhatsApp: "Per WhatsApp kaufen", viewDetails: "Details ansehen",
    shopTheLook: "Look entdecken"
  },
  es: {
    menuKicker: "Maison", navWomen: "Mujer", navMen: "Hombre", navGifts: "Regalos", navDeals: "Ofertas flash",
    navCollection: "Colección", navStories: "Historias", navOrder: "Pedido", navStores: "Tiendas",
    navClientService: "Atención al cliente", navAbout: "Sobre nosotros", navCountryLang: "País e idioma",
    navReplayTour: "Repetir la guía del sitio", searchPrompt: "¿Qué estás buscando?",
    searchPlaceholder: "Bolsos, chaquetas, vestidos...", searchBtn: "Buscar",
    heroKicker: "Primavera Verano 2026", heroTitle: "Eleva tu estilo", heroSub: "Moda de calidad, pensada para ti",
    shopWomen: "Comprar Mujer", shopMen: "Comprar Hombre", discoverCampaign: "Descubrir la campaña",
    dealsTitle: "Ofertas flash", dealsSub: "Los precios de hoy se reinician a medianoche — nuevas ofertas cada día",
    dealsEndsIn: "Los precios de hoy terminan en", collectionTitle: "Nuestra colección", collectionSub: "Descubre toda la colección", noResults: "Ningún producto coincide con tu búsqueda.",
    checkoutTitle: "Pedir por WhatsApp", checkoutNote: "",
    fieldName: "Nombre completo", fieldAddress: "Dirección", fieldPhone: "Número de teléfono", fieldEmail: "Correo electrónico",
    checkoutSubmit: "Enviar por WhatsApp", boutiquesKicker: "Boutiques", storeLocatorTitle: "Encuentra una tienda",
    storeLocatorLead: "Encuentra una boutique Fashion cerca de ti. Reserva una cita privada o recoge tu pedido de WhatsApp en tienda.",
    storeSearchPlaceholder: "Buscar por ciudad o barrio",
    newsletterTitle: "Únete a la maison",
    newsletterBody: "Disfruta de <strong>15 % de descuento + envío gratis</strong> en tu primer pedido. Sé el primero en enterarte de los próximos drops.",
    newsletterSubmit: "Suscribirse", addToBag: "Añadir a la bolsa", buyWhatsApp: "Comprar por WhatsApp", viewDetails: "Ver detalles",
    shopTheLook: "Ver el look"
  }
};

function t(key) {
  const code = langCode();
  return (UI_STRINGS[code] && UI_STRINGS[code][key]) || UI_STRINGS.en[key] || key;
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (UI_STRINGS.en[key] !== undefined) el.innerHTML = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (UI_STRINGS.en[key] !== undefined) el.setAttribute("placeholder", t(key));
  });
}

function formatMoney(usd) {
  const value = usd * selectedCountry.rate;
  if (selectedCountry.currency === "JPY" || selectedCountry.currency === "KRW" || selectedCountry.currency === "NGN") {
    return `${selectedCountry.currency} ${Math.round(value).toLocaleString()}`;
  }
  return `${selectedCountry.currency} ${value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

function cardHTML(product, options = {}) {
  const wished = wishlist.includes(product.id);
  const delay = options.delay ? `style="transition-delay:${options.delay}s;animation-delay:${options.delay}s"` : "";
  const dealClass = options.deal ? " deal-card" : "";
  const meta = saleMeta(product);
  const saleKey = product.sale || "trends";
  const pulse = saleKey === "hot" ? " hot-badge" : "";
  const badge = `<span class="badge ${meta.className}${pulse}">${meta.label} · -${discount(product)}%</span>`;

  return `
    <article class="card${dealClass}" data-id="${product.id}" data-sale="${saleKey}" ${delay}>
      <div class="img-box" data-open-product="${product.id}">
        ${flipMediaHTML(product)}
        ${badge}
        <button class="wish-btn${wished ? " on" : ""}" type="button" data-wish="${product.id}" aria-label="Save ${product.name}">${wished ? "♥" : "♡"}</button>
      </div>
      <div class="card-body">
        <h3 data-open-product="${product.id}">${product.name}</h3>
        <div class="price-row">
          <span class="price">${formatMoney(product.price)}</span>
          <span class="was">${formatMoney(product.was)}</span>
        </div>
        <p class="meta">★ ${product.rating} · ${product.sold} sold</p>
        <div class="card-actions">
          <button class="add-btn" type="button" data-add="${product.id}">${t("addToBag")}</button>
          <a class="buy-btn" href="${waLink(`I want ${product.name} (${formatMoney(product.price)})`)}">${t("buyWhatsApp")}</a>
        </div>
      </div>
    </article>
  `;
}

function updatePriceChipLabels() {
  const map = {
    under20: `Under ${formatMoney(20)}`,
    "20to40": `${formatMoney(20)}–${formatMoney(40)}`,
    "40plus": `${formatMoney(40)}+`
  };
  document.querySelectorAll(".price-chip").forEach((chip) => {
    const key = chip.dataset.price;
    if (key === "all") chip.textContent = "All";
    else if (map[key]) chip.textContent = map[key];
  });
}

function renderLookStrip() {
  const strip = document.getElementById("lookStrip");
  if (!strip) return;
  strip.innerHTML = LOOK_IDS.map((id) => {
    const product = findProduct(id);
    if (!product) return "";
    return `
      <button type="button" class="look-mini" data-open-product="${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <span>
          <h3>${product.name}</h3>
          <span class="price">${formatMoney(product.price)}</span>
        </span>
      </button>
    `;
  }).join("");
}

function openProductModal(id) {
  const product = findProduct(id);
  if (!product) return;
  pdpProductId = id;
  pdpQty = 1;
  pdpSize = product.sizes[0];

  const back = productBackImage(product);
  document.getElementById("pdpImage").src = product.image;
  document.getElementById("pdpImage").alt = `${product.name} front`;
  document.getElementById("pdpImageBack").src = back;
  document.getElementById("pdpImageBack").alt = `${product.name} back`;
  setFlipState(document.getElementById("pdpFlip"), false);
  document.querySelectorAll("[data-pdp-face]").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.pdpFace === "front");
  });

  document.getElementById("pdpTitle").textContent = product.name;
  const meta = saleMeta(product);
  const saleKey = product.sale || "trends";
  document.getElementById("productModal").dataset.sale = saleKey;
  document.getElementById("pdpBadge").textContent = `${meta.label} · -${discount(product)}%`;
  document.getElementById("pdpPrice").textContent = formatMoney(product.price);
  document.getElementById("pdpWas").textContent = formatMoney(product.was);
  document.getElementById("pdpMeta").textContent = `★ ${product.rating} · ${product.sold} sold`;
  document.getElementById("pdpDesc").textContent = product.description;
  document.getElementById("pdpQty").textContent = String(pdpQty);
  document.getElementById("pdpBuy").href = waLink(`I want ${product.name} size ${pdpSize} x${pdpQty} (${formatMoney(product.price * pdpQty)})`);
  document.getElementById("pdpWish").textContent = wishlist.includes(id) ? "Saved" : "Save";

  document.getElementById("pdpSizes").innerHTML = product.sizes.map((size) => `
    <button type="button" data-size="${size}" class="${size === pdpSize ? "active" : ""}">${size}</button>
  `).join("");

  document.getElementById("productModal").classList.add("open");
  document.getElementById("productModal").setAttribute("aria-hidden", "false");
  document.getElementById("pdpOverlay").hidden = false;
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("open");
  document.getElementById("productModal").setAttribute("aria-hidden", "true");
  document.getElementById("pdpOverlay").hidden = true;
  pdpProductId = null;
}

function updateOfferChip() {
  const chip = document.getElementById("offerChip");
  const promoText = document.getElementById("promoText");
  if (!chip) return;
  chip.hidden = !firstOrderOffer;
  if (firstOrderOffer && promoText) {
    promoText.textContent = "Welcome offer unlocked · Applied at WhatsApp checkout";
  } else if (promoText) {
    promoText.textContent = "Free shipping over $50 · Order straight to WhatsApp";
  }
}

function applySignup(email, name = "") {
  if (!email) return;
  localStorage.setItem("fashion-subscribed", "1");
  localStorage.setItem("fashion-first-offer", "1");
  localStorage.setItem("fashion-email", email);
  if (name) localStorage.setItem("fashion-name", name);
  subscribed = true;
  firstOrderOffer = true;
  updateOfferChip();
  closeSignup();
  showToast("FIRST15 unlocked · 15% off + free shipping");
}

function openSignup() {
  document.getElementById("signupModal").hidden = false;
  document.getElementById("signupOverlay").hidden = false;
}

function closeSignup() {
  document.getElementById("signupModal").hidden = true;
  document.getElementById("signupOverlay").hidden = true;
}

const tourSteps = [
  { title: "Search the maison", text: "Use search to find hoodies, jackets, dresses, and more in seconds.", target: "[data-tour='search']", scroll: null },
  { title: "Flash Deals", text: "Hot deals end tonight. Watch the countdown and grab staggered drops as they appear.", target: "[data-tour='deals']", scroll: "#deals" },
  { title: "Filter by price", text: "Jump the collection fast with price chips — under $20, $20–$40, or $40+.", target: "[data-tour='filters']", scroll: "#shop" },
  { title: "Live chat", text: "Need sizing or order help? Open live chat anytime — or hand off to WhatsApp.", target: "[data-tour='chat']", scroll: null },
  { title: "Country & language", text: "Pick your market so prices and currency match where you shop.", target: "[data-tour='country']", scroll: "#stores" }
];

let tourIndex = 0;

function clearTourGlow() {
  document.querySelectorAll(".tour-target-glow").forEach((el) => el.classList.remove("tour-target-glow"));
}

function showTourStep() {
  const step = tourSteps[tourIndex];
  if (!step) return finishTour();
  clearTourGlow();
  document.getElementById("tourTitle").textContent = step.title;
  document.getElementById("tourText").textContent = step.text;
  document.getElementById("tourStep").textContent = `${tourIndex + 1} / ${tourSteps.length}`;
  document.getElementById("tourNext").textContent = tourIndex === tourSteps.length - 1 ? "Done" : "Next";
  document.getElementById("tourOverlay").hidden = false;

  if (step.scroll) {
    document.querySelector(step.scroll)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  setTimeout(() => {
    const target = document.querySelector(step.target);
    if (target) target.classList.add("tour-target-glow");
  }, 350);
}

function startTour(force = false) {
  if (!force && localStorage.getItem("fashion-tour-done") === "1") return;
  tourIndex = 0;
  setMenu(false);
  showTourStep();
}

function finishTour() {
  clearTourGlow();
  document.getElementById("tourOverlay").hidden = true;
  localStorage.setItem("fashion-tour-done", "1");
}

function langShort() {
  const map = {
    English: "EN",
    Français: "FR",
    Italiano: "IT",
    Deutsch: "DE",
    Español: "ES",
    العربية: "AR",
    日本語: "JA",
    한국어: "KO",
    中文: "ZH",
    Português: "PT",
    Nederlands: "NL"
  };
  return map[selectedCountry.lang] || "EN";
}

function renderCountryUI() {
  const compact = document.getElementById("countryCompact");
  if (compact) {
    compact.textContent = `${selectedCountry.name.toUpperCase()} — ${langShort()}`;
  }
  applyStaticTranslations();
  const featuredPrice = document.querySelector(".featured-price");
  if (featuredPrice) {
    featuredPrice.innerHTML = `<strong>${formatMoney(22)}</strong> <span class="was">${formatMoney(45)}</span>`;
  }
  document.documentElement.lang = selectedCountry.lang === "Français" ? "fr"
    : selectedCountry.lang === "Italiano" ? "it"
    : selectedCountry.lang === "Deutsch" ? "de"
    : selectedCountry.lang === "Español" ? "es"
    : "en";
  updatePriceChipLabels();
}

function renderStores() {
  const q = storeQuery.trim().toLowerCase();
  const list = stores.filter((store) => {
    if (!q) return true;
    return `${store.city} ${store.name} ${store.address}`.toLowerCase().includes(q);
  });

  storeGrid.innerHTML = list.length
    ? list.map((store) => `
        <article class="store-card">
          <h3>${store.name}</h3>
          <p>${store.address}</p>
          <p>${store.city} · ${store.hours}</p>
          <div class="store-meta">${store.services.map((s) => `<span>${s}</span>`).join("")}</div>
          <a href="${waLink(`I'd like an appointment at ${store.name}, ${store.city}`)}">Book on WhatsApp</a>
          <button type="button" data-panel="stores">Services</button>
        </article>
      `).join("")
    : `<p class="empty-state">No boutiques match that search.</p>`;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".store-card").forEach((card) => {
    observer.observe(card);
    if (card.getBoundingClientRect().top < window.innerHeight) card.classList.add("show");
  });
}

function openPanel(key) {
  const content = panelContent[key];
  if (!content) return;
  panelTitle.textContent = content.title;
  panelBody.innerHTML = content.html;
  infoPanel.classList.add("open");
  infoPanel.setAttribute("aria-hidden", "false");
  panelOverlay.hidden = false;
  setMenu(false);
}

function closePanel() {
  infoPanel.classList.remove("open");
  infoPanel.setAttribute("aria-hidden", "true");
  panelOverlay.hidden = true;
}

function languages() {
  return ["All", ...Array.from(new Set(countries.map((c) => c.lang)))];
}

function renderLangPills() {
  langPills.innerHTML = languages().map((lang) => `
    <button type="button" data-lang="${lang}" class="${lang === activeLangFilter ? "active" : ""}">${lang}</button>
  `).join("");
}

function renderCountryList(filter = "") {
  const q = filter.trim().toLowerCase();
  const list = countries.filter((country) => {
    const langOk = activeLangFilter === "All" || country.lang === activeLangFilter;
    const searchOk = !q || `${country.name} ${country.lang} ${country.currency}`.toLowerCase().includes(q);
    return langOk && searchOk;
  });

  countryList.innerHTML = list.map((country) => `
    <button type="button" class="country-option${country.code === selectedCountry.code ? " active" : ""}" data-country="${country.code}" role="option" aria-selected="${country.code === selectedCountry.code}">
      <span class="flag">${country.flag}</span>
      <span>
        <strong>${country.name}</strong>
        <span>${country.lang}</span>
      </span>
      <span class="currency">${country.currency}</span>
    </button>
  `).join("");
}

function openCountryModal() {
  renderLangPills();
  renderCountryList(document.getElementById("countryFilter").value);
  countryModal.hidden = false;
  countryOverlay.hidden = false;
  setMenu(false);
  document.getElementById("countryFilter").focus();
}

function closeCountryModal() {
  countryModal.hidden = true;
  countryOverlay.hidden = true;
}

function selectCountry(code) {
  const next = countries.find((country) => country.code === code);
  if (!next) return;
  selectedCountry = next;
  saveCountry();
  renderCountryUI();
  renderProducts();
  renderCart();
  closeCountryModal();
  showToast(`Shopping in ${next.name} · ${next.lang}`);
}

document.getElementById("storeSearchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  storeQuery = document.getElementById("storeQuery").value;
  renderStores();
});

document.getElementById("storeQuery").addEventListener("input", (event) => {
  storeQuery = event.target.value;
  renderStores();
});

document.getElementById("countryTrigger").addEventListener("click", openCountryModal);
document.getElementById("menuCountryBtn").addEventListener("click", openCountryModal);
document.getElementById("closeCountry").addEventListener("click", closeCountryModal);
countryOverlay.addEventListener("click", closeCountryModal);
document.getElementById("closePanel").addEventListener("click", closePanel);
panelOverlay.addEventListener("click", closePanel);

document.getElementById("countryFilter").addEventListener("input", (event) => {
  renderCountryList(event.target.value);
});

langPills.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-lang]");
  if (!btn) return;
  activeLangFilter = btn.dataset.lang;
  renderLangPills();
  renderCountryList(document.getElementById("countryFilter").value);
});

countryList.addEventListener("click", (event) => {
  const option = event.target.closest("[data-country]");
  if (!option) return;
  selectCountry(option.dataset.country);
});

document.body.addEventListener("click", (event) => {
  const panelBtn = event.target.closest("[data-panel]");
  if (panelBtn) {
    event.preventDefault();
    openPanel(panelBtn.dataset.panel);
  }
});

renderCountryUI();
renderStores();
renderProducts();
renderCart();
startCountdown();
updateHeader();
updateOfferChip();
initLiveChat();
initProductModal();
initSignupAndTour();

function initProductModal() {
  document.getElementById("pdpClose").addEventListener("click", closeProductModal);
  document.getElementById("pdpOverlay").addEventListener("click", closeProductModal);

  document.getElementById("pdpQtyMinus").addEventListener("click", () => {
    pdpQty = Math.max(1, pdpQty - 1);
    document.getElementById("pdpQty").textContent = String(pdpQty);
    refreshPdpBuyLink();
  });

  document.getElementById("pdpQtyPlus").addEventListener("click", () => {
    pdpQty += 1;
    document.getElementById("pdpQty").textContent = String(pdpQty);
    refreshPdpBuyLink();
  });

  document.getElementById("pdpSizes").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-size]");
    if (!btn) return;
    pdpSize = btn.dataset.size;
    document.querySelectorAll("#pdpSizes button").forEach((el) => {
      el.classList.toggle("active", el.dataset.size === pdpSize);
    });
    refreshPdpBuyLink();
  });

  document.getElementById("pdpAdd").addEventListener("click", () => {
    if (!pdpProductId) return;
    addToCart(pdpProductId, pdpQty);
    closeProductModal();
  });

  document.getElementById("pdpWish").addEventListener("click", () => {
    if (!pdpProductId) return;
    toggleWish(pdpProductId);
    document.getElementById("pdpWish").textContent = wishlist.includes(pdpProductId) ? "Saved" : "Save";
  });
}

function refreshPdpBuyLink() {
  const product = findProduct(pdpProductId);
  if (!product) return;
  document.getElementById("pdpBuy").href = waLink(
    `I want ${product.name} size ${pdpSize} x${pdpQty} (${formatMoney(product.price * pdpQty)})`
  );
}

function initSignupAndTour() {
  document.getElementById("signupClose").addEventListener("click", () => {
    closeSignup();
    maybeStartTour();
  });
  document.getElementById("signupSkip").addEventListener("click", () => {
    closeSignup();
    maybeStartTour();
  });
  document.getElementById("signupOverlay").addEventListener("click", () => {
    closeSignup();
    maybeStartTour();
  });

  document.getElementById("signupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    applySignup(form.get("email"), form.get("name") || "");
    maybeStartTour();
  });

  document.getElementById("tourSkip").addEventListener("click", finishTour);
  document.getElementById("tourNext").addEventListener("click", () => {
    if (tourIndex >= tourSteps.length - 1) finishTour();
    else {
      tourIndex += 1;
      showTourStep();
    }
  });

  document.getElementById("replayTourBtn").addEventListener("click", () => {
    setMenu(false);
    startTour(true);
  });

  if (!subscribed) {
    setTimeout(openSignup, 900);
  } else {
    maybeStartTour();
  }
}

function maybeStartTour() {
  if (localStorage.getItem("fashion-tour-done") === "1") return;
  setTimeout(() => startTour(false), 600);
}

/* ---------- LIVE CHAT ---------- */
function initLiveChat() {
  const launcher = document.getElementById("chatLauncher");
  const windowEl = document.getElementById("chatWindow");
  const messagesEl = document.getElementById("chatMessages");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  const quick = document.getElementById("chatQuick");
  const closeBtn = document.getElementById("chatClose");

  let openedOnce = false;
  let typingTimer = null;

  function timeNow() {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function appendBubble(text, role) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${role}`;
    bubble.innerHTML = `${text}<span class="chat-time">${timeNow()}</span>`;
    messagesEl.appendChild(bubble);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return bubble;
  }

  function showTyping() {
    const typing = document.createElement("div");
    typing.className = "chat-typing";
    typing.id = "chatTyping";
    typing.innerHTML = "<span></span><span></span><span></span>";
    messagesEl.appendChild(typing);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function hideTyping() {
    document.getElementById("chatTyping")?.remove();
  }

  function agentReply(html, delay = 700) {
    showTyping();
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      hideTyping();
      appendBubble(html, "agent");
    }, delay);
  }

  function replyFor(message) {
    const text = message.toLowerCase();

    if (/human|agent|advisor|whatsapp|real person|speak/.test(text)) {
      return `Of course. I’ll connect you with a client advisor on WhatsApp.<br><br><a href="${waLink(`Live chat handoff from ${selectedCountry.name}: ${message}`)}" target="_blank" rel="noopener">Continue on WhatsApp</a>`;
    }
    if (/order|track|shipping|delivery|where is/.test(text)) {
      return `Happy to help with your order. Share your name and phone used at checkout, or tap the green <strong>Chat</strong> button to <button type="button" data-open-checkout style="background:none;border:none;padding:0;color:inherit;text-decoration:underline;cursor:pointer;font:inherit">Order on WhatsApp</button>. For live updates, <a href="${waLink("I'd like to track my Fashion Store order")}" target="_blank" rel="noopener">message us on WhatsApp</a>.`;
    }
    if (/size|sizing|fit|measurement/.test(text)) {
      return `For sizing: most ready-to-wear runs true to size. Bags and accessories are one size. Tell me the piece you’re eyeing and I’ll recommend a fit — or book a boutique appointment from the <a href="#stores">Store Locator</a>.`;
    }
    if (/store|boutique|location|visit|appointment/.test(text)) {
      return `You can find boutiques in Lagos, Abuja, London, Paris, New York, Dubai, and Accra. Open the <a href="#stores">Store Locator</a> or ask me to book via WhatsApp.`;
    }
    if (/deal|sale|discount|flash|offer|price/.test(text)) {
      return `Flash deals are live right now with a countdown on the homepage. Jump to <a href="#deals">Flash Deals</a> — prices show in ${selectedCountry.currency} for ${selectedCountry.name}.`;
    }
    if (/return|exchange|refund/.test(text)) {
      return `Unused items with tags can be returned within 14 days. Boutique exchanges are available in your selected market (${selectedCountry.name}). I can also open Client Service details if you need the full policy.`;
    }
    if (/hello|hi|hey|good (morning|afternoon|evening)/.test(text)) {
      return `Hello — welcome to Fashion. I can help with orders, sizing, boutiques, and today’s deals. What do you need?`;
    }
    if (/thank|thanks|cool|great/.test(text)) {
      return `You’re welcome. I’m here if anything else comes up — or tap “Talk to a human” for WhatsApp.`;
    }

    return `Thanks for your message. I can help with orders, sizing, store visits, and deals. Try a quick reply below, or <a href="${waLink(`Fashion live chat: ${message}`)}" target="_blank" rel="noopener">chat with an advisor on WhatsApp</a>.`;
  }

  function sendUserMessage(message) {
    const trimmed = message.trim();
    if (!trimmed) return;
    appendBubble(trimmed.replace(/</g, "&lt;"), "user");
    input.value = "";
    agentReply(replyFor(trimmed), 650 + Math.random() * 500);
  }

  function openChat() {
    windowEl.classList.add("open");
    windowEl.setAttribute("aria-hidden", "false");
    launcher.setAttribute("aria-expanded", "true");
    if (!openedOnce) {
      openedOnce = true;
      agentReply(`Welcome to Fashion Client Service. You’re shopping in <strong>${selectedCountry.name}</strong> (${selectedCountry.lang}). How can I help today?`, 400);
    }
    setTimeout(() => input.focus(), 200);
  }

  function closeChat() {
    windowEl.classList.remove("open");
    windowEl.setAttribute("aria-hidden", "true");
    launcher.setAttribute("aria-expanded", "false");
  }

  launcher.addEventListener("click", () => {
    if (windowEl.classList.contains("open")) closeChat();
    else openChat();
  });

  closeBtn.addEventListener("click", closeChat);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendUserMessage(input.value);
  });

  quick.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-quick]");
    if (!btn) return;
    const map = {
      order: "I'd like to track my order",
      size: "I need sizing help",
      store: "Help me find a boutique",
      deal: "What are today's deals?",
      human: "I want to talk to a human"
    };
    if (!windowEl.classList.contains("open")) openChat();
    sendUserMessage(map[btn.dataset.quick] || btn.textContent);
  });

  document.getElementById("footerOpenChat")?.addEventListener("click", () => {
    openChat();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });

  // Expose open for other UI hooks
  window.openFashionChat = openChat;
}
