# **Advanced Product Search & Filtering Application**

## **📌 Overview**
This web application allows users to search, filter, and sort products dynamically using data fetched from the **FakeStoreAPI** (`https://fakestoreapi.com/products`). The application provides real-time filtering, sorting options, and error handling for a seamless user experience.

---

## **🚀 Features**
✅ **Search Products** – Filters products based on the title in real time.  
✅ **Filter by Category** – Fetches and dynamically populates the category list.  
✅ **Sort by Price** – Allows sorting in ascending or descending order.  
✅ **Product Count Display** – Shows the number of filtered products.  
✅ **Error Handling** – Displays a message if the API call fails.  

---

## **📜 How It Works**
1. **Fetch Products** – On page load, the application retrieves all products from `https://fakestoreapi.com/products`.
2. **Fetch Categories** – The app dynamically populates the category dropdown using `https://fakestoreapi.com/products/categories`.
3. **User Interaction**:
   - **Search**: Filters products based on the title entered in the search bar.
   - **Category Filter**: Displays only products from the selected category.
   - **Sorting**: Sorts products based on price (`Low to High` or `High to Low`).
4. **Display Products** – Products matching the filters are displayed dynamically.

---

## **🛠️ Technologies Used**
- **HTML** – Structure of the webpage.
- **CSS** – Styling for the product display.
- **JavaScript** – Fetching data, filtering, sorting, and displaying products dynamically.
- **Fetch API** – Retrieves product and category data.

---

## **📌 Setup Instructions**
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Dhruv-garg17/MasaiAssignment.git
