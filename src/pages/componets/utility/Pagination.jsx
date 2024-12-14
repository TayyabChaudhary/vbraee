export default function Pagination() {
  return (
    <>
      <div className="d-flex gap-1">
        <p className="pagi_item arrow d-flex justify-content-center align-items-center me-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.2 2.43L16.778 0L4.8 12l11.978 12l2.422-2.43L9.653 12z"
            />
          </svg>
        </p>

        <p className="pagi_item active d-flex justify-content-center align-items-center">
          1
        </p>

        <p className="pagi_item d-flex justify-content-center align-items-center">
          2
        </p>

        <p className="pagi_item d-flex justify-content-center align-items-center">
          3
        </p>

        <p className="pagi_item d-flex justify-content-center align-items-center">
          4
        </p>

        <p className="pagi_item d-flex justify-content-center align-items-center">
          ...
        </p>

        <p className="pagi_item d-flex justify-content-center align-items-center">
          12
        </p>

        <p className="pagi_item arrow active d-flex justify-content-center align-items-center ms-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4.8 21.57L7.222 24L19.2 12L7.222 0L4.8 2.43L14.347 12z"
            />
          </svg>
        </p>
      </div>
    </>
  );
}
