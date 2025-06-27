    if (query.response_type == "code") {
      // user approved access
      var code = randomstring.generate(8);

      // save the code and request for later
      codes[code] = { request: query };

      var urlParsed = buildUrl(query.redirect_uri, {
        code: code,
        state: query.state,
      });
      res.redirect(urlParsed);
      return;
    }
