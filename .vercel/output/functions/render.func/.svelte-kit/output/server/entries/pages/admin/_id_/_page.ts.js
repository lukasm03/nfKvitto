const load = ({ params }) => {
  return {
    kvitto: {
      id: `${params.id}`
    }
  };
};
export {
  load
};
