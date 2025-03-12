import pandas as pd
import os

# Create data directory if it doesn't exist
os.makedirs('data', exist_ok=True)

# Create sample sales data
sales_data = {
    'Date': pd.date_range(start='2025-01-01', periods=100),
    'Product': ['Product A', 'Product B', 'Product C'] * 34,
    'Quantity': [10, 20, 15, 25, 30] * 20,
    'Price': [100, 200, 150, 300, 250] * 20,
    'Total': [1000, 4000, 2250, 7500, 7500] * 20
}

sales_df = pd.DataFrame(sales_data)

# Create sample company info data
company_info = {
    'Field': ['Company Name', 'Industry', 'Founded', 'Employees', 'Revenue', 'Location'],
    'Value': ['Tech Gear Solutions', 'Technology', '2020', '150', '$25M', 'New York']
}

company_df = pd.DataFrame(company_info)

# Save to Excel files
sales_df.to_excel('data/sales_data.xlsx', index=False)
company_df.to_excel('data/company_info.xlsx', index=False)