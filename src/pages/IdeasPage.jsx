IdeasPage.jsx;

import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import Card from "../components/Card";

import FilterButton from "../components/FilterButton";

import PageButton from "../components/PageButton";

import Banner from "../components/Banner";

export default function IdeasPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [posts, setPosts] = useState([]);

  const [from, setFrom] = useState(null);

  const [to, setTo] = useState(null);

  const [total, setTotal] = useState(null);

  const [page, setPage] = useState(1);

  const [perPage, setPerPage] = useState(parseInt(searchParams.get("perPage")) || 10);

  const [sort, setSort] = useState(searchParams.get("sort") || "Newest");

  const [currentPage, setCurrentPage] = useState(null);

  const [totalPages, setTotalPages] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const sortParam = sort === "Newest" ? "-published_at" : "published_at";

      const params = new URLSearchParams({
        "page[number]": page,

        "page[size]": perPage,

        sort: sortParam,
      });

      try {
        const res = await fetch(`http://localhost:3001/api/ideas?${params.toString()}`);

        const data = await res.json();

        setPosts(data.data);

        setTotal(data.meta.total);

        setFrom(data.meta.from);

        setTo(data.meta.to);

        setCurrentPage(data.meta.current_page);

        setTotalPages(data.meta.last_page);
      } catch (error) {
        console.log("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, perPage, sort]);

  useEffect(() => {
    const newParams = { page, perPage, sort };

    setSearchParams(newParams, { replace: true });
  }, [page, perPage, sort, setSearchParams]);

  const handlePerPage = (e) => {
    setPerPage(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Banner title="Ideas" subtitle="Where all our great things begin" />
      <FilterButton
        from={from}
        to={to}
        total={total}
        valuePerPage={perPage}
        onChangePerPage={handlePerPage}
        valueSort={sort}
        onChangeSort={handleSort}
      />

      <div className="content">
        {loading ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => {
            return (
              <Card key={post.id} imageUrl={post.small_image[0]?.url} title={post.title} date={post.published_at} />
            );
          })
        )}
      </div>
      <PageButton currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
}
