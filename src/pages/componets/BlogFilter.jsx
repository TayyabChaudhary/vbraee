import { Link } from "react-router-dom";

export default function BlogFilter() {
  return (
    <>
      <div className="col col-lg-3 col-xl-2 d-none d-lg-block">
        <div className="col mb-4">
          <p className="blog_head mb-2">main Category</p>
          <div className="col">
            <Link>
              <p className="blog_cate_text active mb-2">All</p>
            </Link>
            <Link>
              <p className="blog_cate_text mb-2">Gaming</p>
            </Link>
            <Link>
              <p className="blog_cate_text mb-2">Investment</p>
            </Link>
            <Link>
              <p className="blog_cate_text mb-2">Software</p>
            </Link>
            <Link>
              <p className="blog_cate_text mb-2">News</p>
            </Link>
          </div>
        </div>
        <div className="col mb-4">
          <p className="blog_head mb-2">More Tags</p>
          <div className="col">
            <Link>
              <p className="blog_cate_text mb-2">#stats</p>
            </Link>
            <Link>
              <p className="blog_cate_text mb-2">#cs2</p>
            </Link>
            <Link>
              <p className="blog_cate_text mb-2">#dota-2</p>
            </Link>
            <Link>
              <p className="blog_cate_text mb-2">#tournaments</p>
            </Link>
            <Link>
              <p className="blog_cate_text mb-2">#tf2</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
