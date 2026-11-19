defmodule Saudacao.Repo do
  use Ecto.Repo,
    otp_app: :saudacao,
    adapter: Ecto.Adapters.Postgres
end
