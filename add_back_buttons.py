import os

pages = [
    "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app/certificates/page.tsx",
    "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app/services/custom-web-applications/page.tsx",
    "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app/services/robust-saas-solutions/page.tsx",
    "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app/services/ui-ux-design-systems/page.tsx",
    "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app/faq/page.tsx",
    "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app/pricing/page.tsx",
    "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app/privacy-policy/page.tsx",
    "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app/terms-of-service/page.tsx",
    "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app/shipping-delivery/page.tsx",
    "d:/deployment_2026/Resume-Nextjs-1.0.0/src/app/refund-policy/page.tsx"
]

import_statement = "import BackButton from \"@/app/components/ui/back-button\";\n"
component_tag = "        <BackButton />\n"

for page in pages:
    if os.path.exists(page):
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if "BackButton" not in content:
            # Add import after the first import or at top
            if "import " in content:
                content = content.replace("import ", import_statement + "import ", 1)
            else:
                content = import_statement + content
            
            # Find the main container div or main and insert the button right inside it
            # Most pages have <main className="container" ... >
            if "<main className=\"container\"" in content:
                # Find the end of the <main> opening tag
                main_idx = content.find("<main className=\"container\"")
                close_bracket = content.find(">", main_idx)
                if close_bracket != -1:
                    content = content[:close_bracket+1] + "\n" + component_tag + content[close_bracket+1:]
            
            with open(page, 'w', encoding='utf-8') as f:
                f.write(content)
        print(f"Updated {page}")
    else:
        print(f"Missing {page}")
