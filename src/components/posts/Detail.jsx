import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  // APIでpost(記事詳細)を取得する処理をuseEffectで実行
  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const { post } = await res.json();
      setPost(post);
      setLoading(false);
    };

    fetcher();
  }, [id]);

  if (loading) return <p>読み込み中...</p>;

  if (!loading && !post) return <p>投稿がみつかりませんでした</p>;

  return (
    <div>
      <div className="max-w-3xl mt-16 mx-auto">
        <div>
          <div>
            <img src={post.thumbnailUrl} alt="thumbnail" />
          </div>
          <div className="mt-3 p-4">
            <div className="flex justify-between">
              <div className="text-gray-400 text-xs">
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
              <div className="flex flex-wrap">
                {post.categories.map((category, index) => {
                  return (
                    <div
                      key={index}
                      className="px-1.5 py-1 mr-2 text-xs text-blue-600 border border-blue-600 rounded"
                    >
                      {category}
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-[#000] text-2xl mb-4 mt-2">{post.title}</p>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-[#000] text-base leading-normal"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
