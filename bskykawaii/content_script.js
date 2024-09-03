(function() {
    let storage = JSON.parse(localStorage.getItem('BSKY_STORAGE'));
  
    if (storage) {
      storage.kawaii = true;
  
      const updatedStorage = JSON.stringify(storage);
      localStorage.setItem('BSKY_STORAGE', updatedStorage);
      console.log('BSKY_STORAGE updated successfully.');
    } else {
      console.log('BSKY_STORAGE not found.');
    }
  })();
  