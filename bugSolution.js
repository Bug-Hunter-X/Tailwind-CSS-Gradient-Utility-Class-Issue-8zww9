```javascript
// Ensure you have the latest version of Tailwind CSS installed
// and your tailwind.config.js file is correctly configured.
//Check for conflicting classes and adjust selectors accordingly

//Example tailwind.config.js settings
module.exports = {
  theme: {
    extend: {
      backgroundImage: theme => (
        {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        }
      )
    }
  }
}

<div class="bg-gradient-to-r from-blue-500 to-purple-500">
</div>
```