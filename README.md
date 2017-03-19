# jQuery-alreadyViewed

This module was created to be able to consult large game lists on Kinguin.com.
He was created to be generic and to being able to control stuff that is no more on screen.

## Configure

You can configure the selector of the elements to listen for in the 'init' function of the script

## Create a Bookmarklet

You can create a bookmarklet to add a "flush list" button on your webpage.

```
javascript:(function(){s=document.createElement('script');s.type='text/javascript';s.src='https://cdn.rawgit.com/4lador/jQuery-alreadyViewed/2acf5e46e543d66d166b7c6e1e41e555c16c97a5/alreadyViewedElements.js?v='+parseInt(Math.random()*99999999);document.body.appendChild(s);})();
```

### Test

You can test this bookmarklet on a list of kinguin.com as the selector used in the script configuration is used for this website.

[exemple link to kinguin.com](https://www.kinguin.net/steam-games/?genre_id=&platform_id=2&name=&q=&category_id=&hotstuff=0&vendor_id=&order=bestseller&dir=desc&max_price=4&min_price=3&metacritic=0&dir_metacritic=desc&platform=2&region_limit=0&hide_outstock=1?p=32&platform_id=2&order=bestseller&dir=desc&max_price=4&min_price=3&dir_metacritic=desc&platform=2&hide_outstock=1?p=3&platform_id=2&order=bestseller&dir=desc&max_price=4&min_price=3&dir_metacritic=desc&platform=2&hide_outstock=1?p=9&platform_id=2&order=bestseller&dir=desc&max_price=4&min_price=3&dir_metacritic=desc&platform=2&hide_outstock=1?p=2&platform_id=2&order=bestseller&dir=desc&max_price=4&min_price=3&dir_metacritic=desc&platform=2&hide_outstock=1?p=9&platform_id=2&order=bestseller&dir=desc&max_price=4&min_price=3&dir_metacritic=desc&platform=2&hide_outstock=1?p=3&platform_id=2&order=bestseller&dir=desc&max_price=4&min_price=3&dir_metacritic=desc&platform=2&hide_outstock=1)
