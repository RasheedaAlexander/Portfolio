class PostsController < ApplicationController
  def index
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to @post, notice: "Go Rasheeda, it's Shebert Day! Your post was successfully saved."
    else
      render 'new', notice: "Unable to save your post"
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :content)
  end
end
