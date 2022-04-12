# Custom text filters
module Jekyll
	module AssetFilter
  		def currency(input)
			return sprintf('$%0.2f',input).gsub(/(\d)(?=(\d\d\d)+(?!\d))/, "\\1,")
  		end
	end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
