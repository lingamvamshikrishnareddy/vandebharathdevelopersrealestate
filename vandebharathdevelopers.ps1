# Set the base directory
Set-Location -Path "D:\freelance\vandebharathdevelopers"

# Create root directory
New-Item -Path "frontend" -ItemType Directory

# Create public directory and its contents
New-Item -Path "frontend/public" -ItemType Directory
New-Item -Path "frontend/public/index.html" -ItemType File
New-Item -Path "frontend/public/images" -ItemType Directory

# Create image files
$imageFiles = @(
    "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"
)
foreach ($file in $imageFiles) {
    New-Item -Path "frontend/public/images/$file" -ItemType File
}

# Create src directory and its subdirectories
New-Item -Path "frontend/src" -ItemType Directory
New-Item -Path "frontend/src/components" -ItemType Directory
New-Item -Path "frontend/src/pages" -ItemType Directory
New-Item -Path "frontend/src/styles" -ItemType Directory

# Create component directories and files
$components = @(
    "Header",
    "Footer",
    "PropertyCard"
)
foreach ($component in $components) {
    New-Item -Path "frontend/src/components/$component" -ItemType Directory
    New-Item -Path "frontend/src/components/$component/$component.js" -ItemType File
}

# Create page directories and files
$pages = @(
    "Home",
    "About",
    "Contact",
    "Properties"
)
foreach ($page in $pages) {
    New-Item -Path "frontend/src/pages/$page" -ItemType Directory
    if ($page -eq "Properties") {
        New-Item -Path "frontend/src/pages/$page/PropertyDetails.js" -ItemType File
    } else {
        New-Item -Path "frontend/src/pages/$page/$page.js" -ItemType File
    }
}

# Create style file
New-Item -Path "frontend/src/styles/index.css" -ItemType File

# Create root files
New-Item -Path "frontend/src/App.js" -ItemType File
New-Item -Path "frontend/src/index.js" -ItemType File
New-Item -Path "frontend/package.json" -ItemType File
New-Item -Path "frontend/tailwind.config.js" -ItemType File

Write-Host "Frontend project structure created successfully in D:\freelance\vandebharathdevelopers\frontend!"