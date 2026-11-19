defmodule SaudacaoWeb.PageController do
  use SaudacaoWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end
end
