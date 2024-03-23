module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: 'New component:',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Group(Optional):'
      }
    ]
    
    return inquirer.prompt(questions).then(answers => {
      const {component_name, dir} = answers;
      const path_str = dir? `/${dir}`: '';
      const path = `${path_str}`;
      const absPath = `src/components${path}`;
      const Component_name = component_name.charAt(0).toUpperCase()
                           + component_name.slice(1)
      return {...answers, path, absPath, Component_name};
    })
  }
}
