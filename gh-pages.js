var ghpages = require('gh-pages');

ghpages.publish(
    'public', 
    {
        branch: 'gh-pages',
        repo: 'https://github.com/generalxhd/Gradely2-website.git', 
        user: {
            name: 'Elias Schneider',
            email: 'login@eliasschneider.com' 
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)