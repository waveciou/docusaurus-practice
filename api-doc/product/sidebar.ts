import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "product/product-management-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "product/get-all-products",
          label: "Get all products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "product/add-a-new-product",
          label: "Add a new product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "product/get-product-by-id",
          label: "Get product by ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
