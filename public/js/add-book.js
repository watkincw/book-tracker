async function newFormHandler(event) {
  event.preventDefault();
  console.log('You clicked a button.');

  const title = document.querySelector('input[name="title"]').value;

  const response = await fetch('/dashboard', {
    method: 'POST',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#btn').addEventListener('submit', newFormHandler);