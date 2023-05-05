/* eslint-disable import/prefer-default-export */

export const GET = async () => {
  return new Response(JSON.stringify({ name: 'John Doe' }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
