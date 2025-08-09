-- Slugify titles for use in URLs or identifiers.
local function slugify(s)
    -- Replace spaces and slashes with dashes
    s = s:gsub("[%s+/]+", "-")
    -- Remove all non-ASCII characters (bytes > 0x7F)
    s = s:gsub("[^\0-\127]", "")
    -- Remove anything not alphanumeric or dash
    s = s:gsub("[^%w-]+", "")
    -- Lowercase
    s = s:lower()
    return s
end

return {
    Meta = function(m)
        m.slug = m.title and slugify(pandoc.utils.stringify(m.title))
        return m
    end,
}
