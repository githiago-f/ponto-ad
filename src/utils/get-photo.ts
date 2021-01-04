export const getPhoto = async (accessToken: string): Promise<string> => {
  const res = await fetch('https://graph.microsoft.com/v1.0/me/photo/$value',
    {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
  const fr = new FileReader();
  fr.readAsDataURL(await res.blob());

  return new Promise(resolve => {
    fr.onloadend = ev => {
      resolve(ev.target?.result as string);
    };
  });
};
