🚀 Smart Product Comparison App
Frontend Portfolio Roadmap
✅ Phase 1 – Project Foundation
Goal: Setup basic project structure

Tasks:

Create React project
Install React Router
Create folders:src/componentssrc/pagessrc/datasrc/utilssrc/styles
Pages:

Home
SearchResults
Compare
Expected Result:

User can navigate between pages without reload.

✅ Phase 2 – Mock Product Database
Goal: Create fake product data

Tasks:

Create file: src/data/products.js
Add 15–30 products
Use consistent structure:
Example structure:

id

name

brand

price

ram

storage

screen

battery

image

Expected Result:

Static product data ready.

✅ Phase 3 – Product Card Component
Goal: Reusable product UI

Tasks:

Create components/ProductCard.jsx
Show image
Show name
Show price
Show brand
Add “Add to Compare” button
Expected Result:

Reusable card component.

✅ Phase 4 – Search System
Goal: Implement search

Tasks:

Add search input on Home page
Pass search query to Results page
Filter products using JavaScript
Logic:

Filter products by name including search term.

Expected Result:

User sees filtered results.

✅ Phase 5 – Results Page
Goal: Display filtered products

Tasks:

Import products
Filter by query
Render ProductCard using map()
Expected Result:

Search results list appears correctly.

✅ Phase 6 – Compare State
Goal: Store selected products

Tasks:

Create compare state (useState or Context)
Add “Add to Compare”
Limit to 2–3 products
Expected Result:

User can select products for comparison.

✅ Phase 7 – Comparison Page
Goal: Show side-by-side comparison

Display:

Name
Brand
Price
RAM
Storage
Screen
Battery
Image
Expected Result:

Clear comparison table.

✅ Phase 8 – Smart Recommendation (Rule-Based)
Goal: Fake AI logic

Rules:

Best Value → Lowest price
Best Performance → Highest RAM
Best Battery → Highest battery
Expected Result:

App highlights recommended product.

✅ Phase 9 – UI Polish
Tasks:

Add empty state
Add remove from compare
Make responsive
Improve SCSS styling
Add hover effects
Expected Result:

Professional UI.

✅ Phase 10 – Portfolio Ready
Tasks:

Clean structure
Improve README
Add screenshots
Deploy on Vercel
Expected Result:

Production-ready portfolio project.

🧭 User Flow
Home → Search → Results → Select → Compare → Recommendation

✅ Done.