import nextConfig from "eslint-config-next";

const eslintConfig = [
  // Configurar ignorados globales adicionales
  {
    ignores: [
      "**/node_modules/**",
      "**/scratch/**",
      "**/lighthouse.json",
      "**/lighthouse2.json",
    ],
  },
  ...nextConfig,
  {
    rules: {
      // Ajustar reglas experimentales o hiper-estrictas a advertencias para no bloquear compilaciones
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
      "import/no-anonymous-default-export": "off",
    },
  },
];

export default eslintConfig;
