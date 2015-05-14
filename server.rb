require 'sinatra'

class ApiCohort < Sinatra::Base
  set :public_folder, proc { File.join(root) }

  get '/' do
  end
end
