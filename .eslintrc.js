module.exports = {
  extends: ['react-app'],
  rules: {
    // ========== REGRAS COM AUTO-FIX ==========
    'no-var': 'error',           // ❌ var → ✅ let/const
    'semi': ['error', 'always'], // ❌ sem ; → ✅ com ;
    'quotes': ['error', 'single'], // ❌ " → ✅ '
    'indent': ['error', 2],      // ❌ má indentação → ✅ 2 espaços
    'space-in-parens': ['error', 'never'], // ❌ espaço em parênteses → ✅ sem espaço
    'comma-spacing': ['error', { 'before': false, 'after': true }], // ❌ espaçamento incorreto em vírgulas → ✅ espaço após vírgula
    'keyword-spacing': ['error', { 'before': true, 'after': true }], // ❌ espaçamento incorreto em palavras-chave → ✅ espaço correto
    'space-before-blocks': ['error', 'always'], // ❌ sem espaço antes de blocos → ✅ com espaço
    'object-curly-spacing': ['error', 'always'], // ❌ sem espaço em chaves de objetos → ✅ com espaço
    'array-bracket-spacing': ['error', 'never'], // ❌ espaço em colchetes de arrays → ✅ sem espaço
    // ========== REGRAS SEM AUTO-FIX ==========
    'no-unused-vars': 'warn',

    // ========== REGRAS DO REACT ==========
    'react/react-in-jsx-scope': 'off'
  },
  settings : {
    'react' : {
      'version' : 'detect '
    }
  }
};
