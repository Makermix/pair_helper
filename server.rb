require 'sinatra'
require 'open-uri'
require 'json'

set :public_folder, proc { File.join(root) }

class ApiCohort < Sinatra::Base
  set :public_folder, proc { File.join(root) }

  get '/' do
   # JSON.generate(open("http://makermix.herokuapp.com/cohorts/1"))
   #  # "Hello World"
   message = open("http://makermix.herokuapp.com/cohorts/1")
   message.body
  end
end
