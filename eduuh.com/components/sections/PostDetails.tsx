interface PostDetailsProps {
  date: string;
  modifiedDate?: string;
  status?: 'Complete' | 'Ongoing' | 'Deprecated';
}

const PostDetails = ({ date, modifiedDate, status }: PostDetailsProps) => {
  return (
    <section className="py-1 flex gap-2 text-xs">
      <p>Published: </p>
      <p>{date}</p>
      {modifiedDate && (
        <>
          <p>Edited: </p>
          <p>{date}</p>
        </>
      )}
      {status && (
        <>
          <p>Status:</p>
          <p className="text-[#FF47C7] dark:text-[#FF47C7] italic">{status}</p>
        </>
      )}
    </section>
  );
};

export default PostDetails;
