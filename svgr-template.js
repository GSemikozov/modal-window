function template({ template }, opts, { imports, componentName, props, jsx, exports }) {
    return template.ast`
    ${imports}
    const ${componentName} = (${props}) => ${jsx}

    ${componentName}.displayName = ${componentName}.name;

    ${exports}
  `;
}
module.exports = template;
